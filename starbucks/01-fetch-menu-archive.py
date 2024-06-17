#!/usr/bin/env python
# coding: utf-8

# # Starbucks menus over time
# > This notebook collects Starbucks menus over time by reading historical snapshots of them from the Wayback Machine. The files are nested JSON used to feed the company's [menu page](https://www.starbucks.com/menu). They are then parsed, flattened into a tabular structure and concatenated into a large, time-series dataframe that can be used for analysis.

# #### Load Python tools and Jupyter config

import json
import requests
import pandas as pd
import jupyter_black
from time import sleep
from random import randint
from tqdm.notebook import tqdm


jupyter_black.load()
pd.options.display.max_columns = 100
pd.options.display.max_rows = 1000
pd.options.display.max_colwidth = None


today = pd.Timestamp("today").strftime("%Y%m%d")


# ---

# ## Metadata

# #### Headers for request

headers = {
    "accept": "application/json",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
}


# #### JSON endpoint that points to menu snapshot files via the Internet Archive

url = "https://web.archive.org/cdx/search/cdx?url=https://www.starbucks.com/bff/ordering/menu&output=json"


# #### Request the metaata file in JSON format

r = requests.get(url).json()


# #### Read successful snapshots into a metadata dataframe

archive_src = pd.DataFrame(r, columns=r[0]).drop(0).query("statuscode == '200'")


archive_src.head()


# ---

# ## Process

# #### Clean up dates and url needed to request individual snapshots over time

archive_src["datetime"] = pd.to_datetime(archive_src["timestamp"])
archive_src["date"] = pd.to_datetime(archive_src["timestamp"]).dt.date


archive_src["url"] = (
    "https://web.archive.org/web/"
    + archive_src["timestamp"].astype(str)
    + "if_/"
    + archive_src["original"].astype(str)
)


archive_src["month_year"] = pd.to_datetime(archive_src["timestamp"]).dt.strftime(
    "%m-%Y"
)


# #### Clean up the dataframe, limiting it to just one snapshot per month

archive_df = (
    archive_src.sort_values(["datetime", "date"], ascending=True)
    .drop_duplicates("date", keep="last")
    .drop(["mimetype", "urlkey", "digest", "statuscode", "original"], axis=1)
).reset_index(drop=True)


# ---

# ## Fetch

# #### Function to flatten JSON we get from the archived Starbucks menus

def flatten_structure(entries, path=None, level=0):
    if path is None:
        path = []
    flattened_data = []

    for entry in entries:
        current_path = path + [entry.get("name", "")]
        extended_path = current_path + [""] * (3 - len(current_path))

        # Process products in the current entry
        for product in entry.get("products", []):
            product_info = {
                "main_category": extended_path[0] if len(extended_path) > 0 else "",
                "sub_category": extended_path[1] if len(extended_path) > 1 else "",
                "category_detail": extended_path[2] if len(extended_path) > 2 else "",
                "product_name": product.get("name"),
                "product_form": product.get("formCode"),
                "display_order": product.get("displayOrder"),
                "product_number": product.get("productNumber"),
                "product_type": product.get("productType"),
                "availability": product.get("availability"),
                "path": product.get("uri"),
                "sizes": [size.get("sizeCode") for size in product.get("sizes", [])],
            }
            flattened_data.append(product_info)

        if "children" in entry:
            flattened_data.extend(
                flatten_structure(entry["children"], path=current_path, level=level + 1)
            )

    return flattened_data


# #### Create list of archive urls

archive_urls = archive_df["url"].to_list()


# #### Loop through them, requesting data, storing each result in a list of flattened dataframes

menus = []

for url in tqdm(archive_urls):
    response = requests.get(url, headers=headers)
    json_data = response.json()["menus"]
    flattened_data = flatten_structure(json_data)
    df = pd.DataFrame(flattened_data)
    df["timestamp"] = url.split("/")[4].replace("if_", "")
    menus.append(df)
    sleep(randint(2, 5))


# #### Concatenate into a large dataframe

historial_df = pd.concat(menus).reset_index(drop=True)


# #### Process dates

historial_df["date_captured"] = pd.to_datetime(historial_df["timestamp"]).dt.date
historial_df["year_captured"] = pd.to_datetime(historial_df["timestamp"]).dt.year


# #### Just the columns we need

df = historial_df[
    [
        "product_number",
        "main_category",
        "sub_category",
        "category_detail",
        "product_type",
        "product_name",
        "product_form",
        "date_captured",
        "year_captured",
    ]
].copy()


# ---

# ## Exports

df.head()


df["date_captured"] = pd.to_datetime(df["date_captured"])


df_slim = df[
    [
        "main_category",
        "sub_category",
        "category_detail",
        "product_type",
        "product_name",
        "product_form",
        "date_captured",
    ]
].copy()


hierarchical = (
    df.groupby(
        [
            "date_captured",
            "main_category",
            "sub_category",
            # "category_detail",
            # "product_type",
        ]
    )["product_name"]
    .count()
    .reset_index(name="count")
)


hierarchical["date_captured"] = pd.to_datetime(hierarchical["date_captured"])


dates_to_keep = [
    "2024-03-01",
]


df_observable = hierarchical[
    hierarchical["date_captured"] == "2024-03-30 00:00:00"
].reset_index(drop=True)


df_observable


def create_hierarchical_structure_aggregated(df):
    structure = {"name": "root", "children": []}
    for main_category, main_group in df.groupby("main_category"):
        main_category_dict = {"name": main_category, "children": []}
        for _, row in main_group.iterrows():
            # Directly create sub_category nodes with aggregate values
            sub_category_dict = {"name": row["sub_category"], "value": row["count"]}
            main_category_dict["children"].append(sub_category_dict)
        structure["children"].append(main_category_dict)
    return structure


hierarchical_data = create_hierarchical_structure(df_observable)

# Convert to JSON
hierarchical_json = json.dumps(hierarchical_data, indent=4)

# Save to a JSON file
json_filename = "data/processed/menu_observable_structure.json"
with open(json_filename, "w") as f:
    f.write(hierarchical_json)


# #### JSON format

df.to_json("data/processed/starbucks_historical_menus.json", indent=4, orient="records")


# #### CSV format

df.to_csv("data/processed/starbucks_historical_menus.csv", index=False)
df.to_csv(f"data/processed/starbucks_historical_menus_{today}.csv", index=False)


get_ipython().system('jupyter nbconvert --to script --no-prompt --output 01-fetch-menu-archive 01-fetch-menu-archive.ipynb')

