#!/usr/bin/env python
# coding: utf-8

# # OC precinct presidential votes

# #### Load Python tools and Jupyter config

import json
import requests
import pandas as pd
import jupyter_black
import altair as alt
import geopandas as gpd


jupyter_black.load()
pd.options.display.max_columns = 100
pd.options.display.max_rows = 1000
pd.options.display.max_colwidth = None


today = pd.Timestamp("today").strftime("%Y%m%d")


# ---

# ## Read

# #### Tab-delimitted file with OC primary election results by precinct

src = pd.read_csv(
    "data/raw/results-primary-final.csv",
    sep=r"\t",
    # quotechar='"',
    encoding="utf-8",
    engine="python",
)


# #### Clean up the column names

src.columns = (
    src.columns.str.lower()
    .str.replace(" ", "_")
    .str.replace(".", "")
    .str.replace("/", "_")
)


# #### Just the presidential candidates

df = src.query('contest_title=="PRESIDENT OF THE UNITED STATES"')[
    [
        "precinct",
        "precinct_id",
        "contest_title",
        "contest_party",
        "choice_name",
        "total_votes",
        "ballots_cast",
    ]
].copy()


# #### The dataframe is long. Pivot the table wide so each candidate get a column and filter out (~700 precincts with note ballots cast)

df_wide = (
    df.pivot_table(
        index=["precinct", "precinct_id", "contest_title", "ballots_cast"],
        columns="choice_name",
        values="total_votes",
    )
    .reset_index()
    .copy()
).query("ballots_cast > 0")


# #### Clean up column names

df_wide.columns = (
    df_wide.columns.str.lower()
    .str.replace(" ", "_")
    .str.replace(".", "")
    .str.replace("/", "_")
    .str.replace("-", "_")
)


# #### Candidate lists

all_cand_cols = [
    "andrew_george_rummel",
    "armando_mando_perez_serrato",
    "asa_hutchinson",
    "charles_ballay",
    "chase_oliver",
    "chris_christie",
    "claudia_de_la_cruz",
    "cornel_west",
    "david_stuckenberg",
    "dean_phillips",
    "douglas_groves",
    "eban_cambridge",
    "gabriel_cornejo",
    "hugo_c_aguilar",
    "james_bradley",
    "james_mark_merts",
    "jasmine_sherman",
    "marianne_williamson",
    "nikki_haley",
    "president_cristina_nicole_grappo",
    "president_r_boddie",
    "rachel_swift",
    "reed_michaelsen",
    "richard_gutierrez",
    "ron_desantis",
    "ryan_l_binkley",
    "ryan_stephen_ehrenreich",
    "stephen_p_lyons",
    "vivek_ramaswamy",
    "wayne_anthony_pope_sr",
    "willie_felix_carter",
    "joseph_r_biden_jr",
    "donald_j_trump",
]


# #### Make sure the columns with votes get treated like numbers

df_wide[all_cand_cols] = df_wide[all_cand_cols].apply(pd.to_numeric, errors="coerce")


# #### Count up all votes in presidential contest (not all ballots have a prez vote)

df_wide["all_votes"] = df_wide[all_cand_cols].sum(axis=1)


# #### Just the major candidates

major_candidates = ["joseph_r_biden_jr", "donald_j_trump"]


# #### Make a list of the candidates who aren't Biden or Trump

other_candidate_columns = [
    cand for cand in all_cand_cols if cand not in major_candidates
]


# #### How many votes did the "other" candidates get

df_wide["other_candidates"] = df_wide[other_candidate_columns].sum(axis=1)


# #### Find the maximum number of votes in each row

df_wide["winner_votes"] = df_wide[all_cand_cols].max(axis=1)


# #### Function to determine the winner or 'tie'

def determine_winner(row):
    max_candidates = [col for col in all_cand_cols if row[col] == row["winner_votes"]]
    if len(max_candidates) == 1:
        return max_candidates[0]  # Return the single winner
    else:
        return "tie"  # More than one candidate received the max votes


# #### Apply the function to determine 'winner' or 'tie'

df_wide["winner"] = df_wide.apply(determine_winner, axis=1)


# #### How many precincts did candidates win?

df_wide["winner_name"] = df_wide["winner"].str.replace("_", " ").str.title()


winners = (
    df_wide.winner_name.value_counts()
    .reset_index()
    .rename(columns={"count": "precincts_won"})
)
winners


# #### There were ties? Really? 

ties = df_wide.query('winner == "tie"')[
    [
        "precinct",
        "precinct_id",
        "donald_j_trump",
        "joseph_r_biden_jr",
        "other_candidates",
        "all_votes",
    ]
].copy()
ties.head()


# #### Define a function to apply to each row that will determine the top 3 candidates

def top_candidates(row):
    # Sorts the row by descending vote count, selects the top 3 candidates
    top_candidates = row[all_cand_cols].sort_values(ascending=False).head(3)
    return pd.Series(
        [*top_candidates.index, *top_candidates],
        index=[
            "top_candidate_one",
            "top_candidate_two",
            "top_candidate_three",
            "top_candidate_one_votes",
            "top_candidate_two_votes",
            "top_candidate_three_votes",
        ],
    )


# #### Apply the function across the dataframe rows and join the results as new columns in df_wide

top_candidates_df = df_wide.apply(top_candidates, axis=1)
df_wide = df_wide.join(top_candidates_df)


# #### Calculate share of the vote

df_wide["trump_pct"] = ((df_wide["donald_j_trump"] / df_wide["all_votes"]) * 100).round(
    2
)
df_wide["biden_pct"] = (
    (df_wide["joseph_r_biden_jr"] / df_wide["all_votes"]) * 100
).round(2)
df_wide["other_pct"] = (
    (df_wide["other_candidates"] / df_wide["all_votes"]) * 100
).round(2)
df_wide["winning_pct"] = ((df_wide["winner_votes"] / df_wide["all_votes"]) * 100).round(
    2
)


df_wide["contest_title"] = (
    df_wide["contest_title"].str.replace(" OF THE UNITED STATES", "").str.title()
)


df_slim = df_wide[
    [
        "precinct",
        "precinct_id",
        "contest_title",
        "all_votes",
        "donald_j_trump",
        "joseph_r_biden_jr",
        "other_candidates",
        "trump_pct",
        "biden_pct",
        "other_pct",
        "winner_name",
        "winner_votes",
        "winning_pct",
        "top_candidate_one",
        "top_candidate_two",
        "top_candidate_three",
        "top_candidate_one_votes",
        "top_candidate_two_votes",
        "top_candidate_three_votes",
    ]
].copy()


df_slim["top_candidate_one"] = (
    df_slim["top_candidate_one"].str.replace("_", " ").str.title()
)
df_slim["top_candidate_two"] = (
    df_slim["top_candidate_two"].str.replace("_", " ").str.title()
)
df_slim["top_candidate_three"] = (
    df_slim["top_candidate_three"].str.replace("_", " ").str.title()
)


df_slim["top_candidate_one_pct"] = (
    (df_slim["top_candidate_one_votes"] / df_slim["all_votes"]) * 100
).round(2)
df_slim["top_candidate_two_pct"] = (
    (df_slim["top_candidate_two_votes"] / df_slim["all_votes"]) * 100
).round(2)
df_slim["top_candidate_three_pct"] = (
    (df_slim["top_candidate_three_votes"] / df_slim["all_votes"]) * 100
).round(2)


df_slim["precinct"] = df_slim["precinct"].astype(str).str.zfill(5)


df_slim.head()


# ---

# ## Geography

# #### OC precincts

precincts_gdf = gpd.read_file("data/raw/OC_Precinct_2024_final.json")


precincts_gdf.columns = precincts_gdf.columns.str.lower()


precincts_gdf.plot(color="lightgray")


# ---

# ## Merge

precincts_results = gpd.GeoDataFrame(pd.merge(precincts_gdf, df_slim, on="precinct"))


precincts_results.plot()


# ---

# ## Exports

# #### JSON

df_slim.to_json(
    f"data/processed/oc_president_results_precincts.json",
    indent=4,
    orient="records",
)


# #### CSV

df_slim.to_csv(f"data/processed/oc_president_results_precincts.csv", index=False)


# #### GeoJSON

precincts_results.to_file(
    f"data/processed/oc_president_results_precincts.geojson",
    driver="GeoJSON",
)


precincts_gdf.to_file(
    f"data/processed/oc_precincts.geojson",
    driver="GeoJSON",
)


get_ipython().system('jupyter nbconvert --to script --no-prompt --output ../process_oc_precinct_results 01_process_oc_precinct_results.ipynb')

