#!/usr/bin/env python
# coding: utf-8

"""
LA Dodgers Standings, 1958-present
This script downloads the team's current standings table from Baseball Reference and combines it with historic records.
"""

import os
import pandas as pd
import requests
from bs4 import BeautifulSoup
import boto3

# Configuration
year = 2024
url = f"https://www.baseball-reference.com/teams/LAD/{year}-schedule-scores.shtml"
output_dir = "data/processed"
csv_file = f"{output_dir}/dodgers_standings_1958_present.csv"
json_file = f"{output_dir}/dodgers_standings_1958_present.json"
parquet_file = f"{output_dir}/dodgers_standings_1958_present.parquet"
s3_bucket = "stilesdata.com"
s3_key = "dodgers/dodgers_standings_1958_present.json"

# Assume AWS credentials are set as environment variables
aws_access_key_id = os.getenv('HAEKEO_AWS_KEY')
aws_secret_access_key = os.getenv('HAEKEO_AWS_SECRET')

session = boto3.Session(
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
)

s3 = session.resource('s3')
s3.Bucket(s3_bucket).upload_file(json_file, s3_key)

# Fetch and process the current year's data
def fetch_current_year_data(url, year):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    src = (pd.read_html(str(soup))[0].query("Tm !='Tm' and Inn != 'Game Preview, and Matchups'")
              .drop(["Unnamed: 2", "Streak", "Orig. Scheduled"], axis=1)
              .rename(columns={"Unnamed: 4": "home_away"})
              .assign(season=year))
    
    src.columns = src.columns.str.lower().str.replace("/", "_").str.replace("-", "-")
    src.columns = [
        "gm",
        "date",
        "tm",
        "home_away",
        "opp",
        "result",
        "r",
        "ra",
        "inn",
        "record",
        "rank",
        "gb",
        "win",
        "loss",
        "save",
        "time",
        "day_night",
        "attendance",
        "cli",
        "year",
    ]

    # Convert date types where needed
    src["gm"] = src["gm"].astype(int)
    src["year"] = src["year"].astype(str)

    # Split, format date
    src[["weekday", "date"]] = src["date"].str.split(", ", expand=True)
    src["date"] = src["date"].str.replace(" (1)", "").str.replace(" (2)", "")
    src["game_date"] = pd.to_datetime(src["date"] + ", " + src["year"], format="%b %d, %Y")

    # Clean home-away column
    src.loc[src.home_away == "@", "home_away"] = "away"
    src.loc[src.home_away.isna(), "home_away"] = "home"

    # Games back figures as a number
    src["gb"] = (
        src["gb"].str.replace("up ", "up").str.replace("up", "+").str.replace("Tied", "0")
    )
    src["gb"] = (
        src["gb"]
        .apply(
            lambda x: float(x) if x.startswith("+") else -float(x) if float(x) != 0 else 0
        )
        .astype(float)
    )

    # Just the columns we need
    src_df = src[
        [
            "gm",
            "game_date",
            "home_away",
            "opp",
            "result",
            "r",
            "ra",
            "record",
            "rank",
            "gb",
            "time",
            "day_night",
            "attendance",
            "year",
        ]
    ].copy()
    
    return src_df

# Load historic data
def load_historic_data(filepath):
    return pd.read_parquet(filepath)

# Main function
def main():
    # Check if output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    src_df = fetch_current_year_data(url, year)
    historic_df = load_historic_data(parquet_file)
    
    # Concatenate historic and current dataframes
    df = pd.concat([src_df, historic_df]).sort_values("game_date", ascending=False)
    
    # Save outputs
    df.to_csv(csv_file, index=False)
    df.to_json(json_file, indent=4, orient="records")
    df.to_parquet(parquet_file, index=False)
    
    # Upload to S3 using boto3
    session = boto3.Session(profile_name=os.environ.get("AWS_PERSONAL_PROFILE"))
    s3 = session.resource('s3')
    s3.Bucket(s3_bucket).upload_file(json_file, s3_key)

if __name__ == "__main__":
    main()