#!/usr/bin/env python
# coding: utf-8

"""
LA Dodgers Standings, 1958-present
This notebook downloads the team's current standings table from [Baseball Reference](https://www.baseball-reference.com/teams/LAD/2024-schedule-scores.shtml) and combines it with historic records for later analysis and visualization.
"""

# Import Python tools, config

import os
import numpy as np
import pandas as pd
from time import sleep
from tqdm import tqdm

profile_name = os.environ.get("AWS_PERSONAL_PROFILE")

"""
Fetch data
"""

# Import historic game-by-game results, 1958-2023

historic_df = pd.read_parquet("data/processed/dodgers_standings_1958_2023.parquet")

# Fetch the current year's table from Baseball Reference

year = 2024
url = f"https://www.baseball-reference.com/teams/LAD/{year}-schedule-scores.shtml"

src = (
    pd.read_html(url)[0]
    .query("Tm !='Tm' and Inn != 'Game Preview, and Matchups'")
    .drop(["Unnamed: 2", "Streak", "Orig. Scheduled"], axis=1)
    .rename(columns={"Unnamed: 4": "home_away"})
    .assign(season=year)
)

"""
Process
"""

# Clean columns

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


"""
Concatenate
Historic and current dataframes combined into one
"""

df = pd.concat([src_df, historic_df]).sort_values("game_date", ascending=False)

# Data types

df["r"] = df["r"].fillna(np.nan).astype(float)
df["ra"] = df["ra"].fillna(np.nan).astype(float)
df["attendance"] = df["attendance"].fillna(np.nan).astype(float)

"""
Exports
CSV, JSON, Parquet and S3
"""

df.to_csv("data/processed/dodgers_standings_1958_present.csv", index=False)
df.to_json(
    "data/processed/dodgers_standings_1958_present.json", indent=4, orient="records"
)
df.to_parquet("data/processed/dodgers_standings_1958_present.parquet", index=False)

get_ipython().system('aws s3 cp data/processed/dodgers_standings_1958_present.json s3://stilesdata.com/dodgers/dodgers_standings_1958_present.json --profile {profile_name}')