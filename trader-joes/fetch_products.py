#!/usr/bin/env python
"""
Trader Joe's product data scraper

Fetches product information from Trader Joe's GraphQL API for specified store locations.
Exports data to CSV and JSON formats with optional S3 upload capability.
"""

import os
import json
import time
import boto3
import logging
import requests
import pandas as pd
from io import BytesIO
import plotly.express as px
from datetime import datetime
from random import uniform, choice
from urllib.parse import urljoin

# Set up logging
logging.basicConfig(
    level=logging.INFO, 
    format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# Date variables
today = pd.Timestamp("today").strftime("%Y%m%d")
year = pd.Timestamp("today").strftime("%Y")

# Environment detection
is_github_actions = os.getenv("GITHUB_ACTIONS") == "true"

# Directory settings
base_dir = os.getcwd()
data_dir = os.path.join(base_dir)


def setup_aws_session():
    """Set up AWS session based on environment"""
    aws_key_id = os.environ.get("MY_AWS_ACCESS_KEY_ID")
    aws_secret_key = os.environ.get("MY_AWS_SECRET_ACCESS_KEY")
    aws_region = os.environ.get("MY_AWS_DEFAULT_REGION")
    aws_profile = os.environ.get("MY_AWS_PERSONAL_PROFILE")
    
    if is_github_actions:
        return boto3.Session(
            aws_access_key_id=aws_key_id,
            aws_secret_access_key=aws_secret_key,
            region_name=aws_region,
        )
    else:
        return boto3.Session(profile_name=aws_profile, region_name=aws_region)


def get_random_user_agent():
    """Get a random realistic user agent"""
    user_agents = [
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    ]
    return choice(user_agents)


def get_request_headers(referer=None):
    """Generate realistic headers to avoid 403 errors"""
    headers = {
        "Content-Type": "application/json",
        "User-Agent": get_random_user_agent(),
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "DNT": "1",
        "Sec-GPC": "1",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
    }
    
    if referer:
        headers["Referer"] = referer
    
    return headers


def establish_session():
    """Establish a session by visiting the main page first"""
    session = requests.Session()
    
    try:
        # First, visit the main page to establish cookies and session
        main_page_headers = {
            "User-Agent": get_random_user_agent(),
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "DNT": "1",
            "Sec-GPC": "1",
        }
        
        logger.info("Establishing session by visiting main page...")
        response = session.get("https://www.traderjoes.com", headers=main_page_headers, timeout=30)
        
        if response.status_code == 200:
            logger.info("Successfully established session")
            
            # Also visit the products page to simulate normal browsing
            time.sleep(uniform(2, 4))
            products_url = "https://www.traderjoes.com/home/products"
            session.get(products_url, headers=main_page_headers, timeout=30)
            
            return session
        else:
            logger.warning(f"Failed to establish session: {response.status_code}")
            return session
            
    except Exception as e:
        logger.warning(f"Error establishing session: {e}")
        return session


def safe_join(iterable, separator=", "):
    """Safely join list elements"""
    return separator.join(iterable) if iterable else ""


def fetch_paginated_products(store_code, page_size=100, max_retries=3, delay_range=(2, 6), session=None):
    """
    Fetch paginated product data for a given store code with rate limiting and retries
    
    Args:
        store_code: Store identifier
        page_size: Number of products per page
        max_retries: Maximum number of retry attempts
        delay_range: Tuple of (min, max) seconds to wait between requests
    """
    query = """
    query SearchProducts(
        $categoryId: String,
        $currentPage: Int,
        $pageSize: Int,
        $storeCode: String = "250",
        $availability: String = "1",
        $published: String = "1"
    ) {
      products(
        filter: {
          store_code: {eq: $storeCode},
          published: {eq: $published},
          availability: {match: $availability},
          category_id: {eq: $categoryId}
        },
        currentPage: $currentPage,
        pageSize: $pageSize
      ) {
        items {
          sku
          item_title
          category_hierarchy {
            id
            name
            __typename
          }
          primary_image
          primary_image_meta {
            url
            metadata
            __typename
          }
          sales_size
          sales_uom_description
          price_range {
            minimum_price {
              final_price {
                currency
                value
                __typename
              }
              __typename
            }
            __typename
          }
          retail_price
          fun_tags
          item_characteristics
          __typename
        }
      }
    }
    """

    current_page = 1
    all_products = []
    
    # Use provided session or create new requests session
    if session is None:
        session = requests.Session()
    
    # Set up headers with referer
    referer = "https://www.traderjoes.com/home/products"
    headers = get_request_headers(referer=referer)

    while True:
        variables = {
            "storeCode": store_code,
            "availability": "1",
            "published": "1",
            "categoryId": "2",  # Adjust as needed
            "currentPage": current_page,
            "pageSize": page_size,
        }

        json_data = {
            "operationName": "SearchProducts",
            "variables": variables,
            "query": query,
        }

        # Retry logic with exponential backoff
        for attempt in range(max_retries):
            try:
                # Add random delay to avoid rate limiting
                delay = uniform(*delay_range)
                if current_page > 1 or attempt > 0:  # Don't delay on first request
                    logger.info(f"Waiting {delay:.2f} seconds before request...")
                    time.sleep(delay)

                response = session.post(
                    "https://www.traderjoes.com/api/graphql", 
                    headers=headers, 
                    json=json_data,
                    timeout=30
                )

                if response.status_code == 200:
                    data = response.json()
                    
                    # Check for GraphQL errors
                    if "errors" in data:
                        logger.error(f"GraphQL errors: {data['errors']}")
                        return all_products
                    
                    products = data.get("data", {}).get("products", {}).get("items", [])
                    if not products:
                        logger.info(f"No more products found for store {store_code}")
                        return all_products  # Exit the function, not just the retry loop
                    
                    all_products.extend(products)
                    logger.info(f"Store {store_code}: Fetched page {current_page} with {len(products)} products")
                    current_page += 1
                    break  # Success, break retry loop
                    
                elif response.status_code == 403:
                    logger.warning(f"403 Forbidden for store {store_code}, attempt {attempt + 1}")
                    if attempt < max_retries - 1:
                        # For 403 errors, try refreshing headers and longer backoff
                        headers = get_request_headers(referer=referer)  # Refresh headers
                        backoff_delay = (2 ** attempt) * uniform(10, 20)
                        logger.info(f"Refreshing headers and backing off for {backoff_delay:.2f} seconds...")
                        time.sleep(backoff_delay)
                    else:
                        logger.error(f"Max retries exceeded for store {store_code}")
                        return all_products
                        
                else:
                    logger.error(f"Request failed for store {store_code} with status code {response.status_code}")
                    if attempt < max_retries - 1:
                        time.sleep(2 ** attempt)  # Exponential backoff
                    else:
                        return all_products
                        
            except requests.exceptions.RequestException as e:
                logger.error(f"Request exception for store {store_code}: {e}")
                if attempt < max_retries - 1:
                    time.sleep(2 ** attempt)
                else:
                    return all_products

        else:
            # If we get here, we've exhausted retries for this page
            break

    return all_products


def flatten_product_data(product, store_code):
    """Flatten product data and add store code"""
    return {
        "store_code": store_code,
        "sku": product.get("sku"),
        "item_title": product.get("item_title"),
        "primary_image": product.get("primary_image"),
        "primary_image_url": product.get("primary_image_meta", {}).get("url"),
        "sales_size": product.get("sales_size"),
        "sales_uom_description": product.get("sales_uom_description"),
        "final_price": product.get("price_range", {})
        .get("minimum_price", {})
        .get("final_price", {})
        .get("value"),
        "retail_price": product.get("retail_price"),
        "fun_tags": safe_join(product.get("fun_tags", [])),
        "item_characteristics": safe_join(product.get("item_characteristics", [])),
        "category_hierarchy": safe_join(
            [cat.get("name") for cat in product.get("category_hierarchy", [])], " > "
        ),
    }


def compile_all_products_sequential(stores_list, page_size=100):
    """
    Compile all product data using sequential requests (recommended for web scraping)
    
    Sequential requests are more reliable for web scraping as they:
    - Avoid overwhelming the server
    - Reduce chances of rate limiting and 403 errors
    - Allow better error handling and retry logic
    """
    all_products = []
    
    # Establish session first by visiting main page
    session = establish_session()
    
    # Add delay between session establishment and first API call
    logger.info("Waiting before starting API requests...")
    time.sleep(uniform(3, 7))
    
    for i, store_code in enumerate(stores_list, 1):
        logger.info(f"Processing store {store_code} ({i}/{len(stores_list)})")
        
        try:
            products = fetch_paginated_products(store_code, page_size, session=session)
            
            for product in products:
                flattened_product = flatten_product_data(product, store_code)
                all_products.append(flattened_product)
                
            logger.info(f"Store {store_code}: Successfully fetched {len(products)} products")
            
            # Add delay between stores if processing multiple
            if i < len(stores_list):
                delay = uniform(5, 10)
                logger.info(f"Waiting {delay:.2f} seconds before next store...")
                time.sleep(delay)
            
        except Exception as e:
            logger.error(f"Store {store_code} generated an exception: {e}")
            continue
    
    # Convert to DataFrame
    products_df = pd.DataFrame(all_products)
    logger.info(f"Total products collected: {len(products_df)}")
    
    return products_df


def save_to_s3(df, base_path, s3_bucket, formats):
    """Save DataFrame to S3 in multiple formats"""
    if not s3_resource:
        logger.warning("S3 resource not available, skipping S3 upload")
        return
        
    for fmt in formats:
        try:
            buffer = BytesIO()
            if fmt == "csv":
                df.to_csv(buffer, index=False)
                content_type = "text/csv"
            elif fmt == "json":
                df.to_json(buffer, indent=4, orient="records", lines=False)
                content_type = "application/json"
            elif fmt == "parquet":
                df.to_parquet(buffer, index=False)
                content_type = "application/octet-stream"
            
            buffer.seek(0)
            s3_resource.Bucket(s3_bucket).put_object(
                Key=f"{base_path}.{fmt}", Body=buffer, ContentType=content_type
            )
            logger.info(f"Uploaded {fmt} to {s3_bucket}/{base_path}.{fmt}")
        except Exception as e:
            logger.error(f"Failed to upload {fmt} to S3: {e}")


def create_treemap_visualization(df):
    """Create a treemap visualization of product categories"""
    # Clean and prepare data
    df['prod_cat_desc'] = df['prod_cat_desc'].fillna('None')
    
    # Aggregate data
    agg_df = df.groupby(['prod_cat', 'prod_cat_type', 'prod_cat_desc']).size().reset_index(name='count')
    
    # Create treemap
    fig = px.treemap(
        agg_df,
        path=['prod_cat', 'prod_cat_type', 'prod_cat_desc'],
        values='count',
    )
    
    fig.update_layout(
        treemapcolorway=["pink", "lightgray", 'steelblue'], 
        margin=dict(t=0, l=0, r=400, b=0)
    )
    
    return fig


def main():
    """Main execution function"""
    logger.info("Starting Trader Joe's product data collection")
    
    # Initialize AWS session if needed
    try:
        global s3_resource
        session = setup_aws_session()
        s3_resource = session.resource("s3")
    except Exception as e:
        logger.warning(f"AWS setup failed: {e}")
        s3_resource = None
    
    # Load store locations
    logger.info("Loading store locations...")
    loc_df = pd.read_json(
        "https://raw.githubusercontent.com/stiles/locations/main/trader-joes/data/processed/trader_joes_locations.json"
    )
    
    # Select stores to check
    # Option 1: Random store(s)
    # locations_to_check = 1
    # stores_list = loc_df["store_number"].sample(locations_to_check).to_list()
    
    # Option 2: Specific store(s)
    stores_list = ["205"]  # Specify a store number(s)
    
    # Alternative specific stores:
    # stores_list = ["119"]  # LA store
    # stores_list = ["720"]  # Kansas City store
    # stores_list = ["205", "119", "720"]  # Multiple specific stores
    
    logger.info(f"Selected stores: {stores_list}")
    
    # Fetch product data
    products_df = compile_all_products_sequential(stores_list, page_size=100)
    
    if products_df.empty:
        logger.error("No products were collected")
        return
    
    # Merge with location data
    loc_df = loc_df.rename(columns={"storeCode": "store_number"})
    df = pd.merge(
        products_df,
        loc_df[["name", "store_number"]],
        left_on="store_code",
        right_on="store_number",
    )
    
    # Clean data types
    df[["final_price", "retail_price"]] = df[["final_price", "retail_price"]].astype("float")
    
    # Split category hierarchy
    df[["drop", "prod_cat", "prod_cat_type", "prod_cat_desc"]] = df[
        "category_hierarchy"
    ].str.split(">", expand=True)
    
    # Save locally
    logger.info("Saving data locally...")
    
    # Ensure directories exist
    os.makedirs("data/processed", exist_ok=True)
    os.makedirs("data/processed/archive", exist_ok=True)
    
    # JSON exports
    df.to_json("data/processed/products.json", indent=4, orient="records")
    df.to_json(f"data/processed/archive/products_{today}.json", indent=4, orient="records")
    
    # CSV exports
    df.to_csv("data/processed/products.csv", index=False)
    df.to_csv(f"data/processed/archive/products_{today}.csv", index=False)
    
    # Optional S3 upload
    # save_to_s3(df, "trader-joes/products", "stilesdata.com", ["csv", "json", "parquet"])
    
    # Create visualization
    fig = create_treemap_visualization(df)
    # fig.show()  # Uncomment to display
    
    logger.info(f"Data collection complete. Total products: {len(df)}")
    return df


if __name__ == "__main__":
    df = main()
