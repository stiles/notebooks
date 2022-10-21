#!/usr/bin/env python
# coding: utf-8

# Scraping OANN's news feed

import pandas as pd
import requests
from bs4 import BeautifulSoup

today = pd.to_datetime("today").strftime("%Y-%m-%d")

my_headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OSX 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko)Chrome/71.0.3578.98 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
}

session = requests.Session()

url = "https://www.oann.com/category/newsroom/page/"
response = session.get(url, headers=my_headers)

html_soup = BeautifulSoup(response.text, "html.parser")

metadata_homepage = []

response = session.get("https://www.oann.com/category/newsroom/", headers=my_headers)
html_soup = BeautifulSoup(response.text, "html.parser")
h3s = html_soup.findAll("h3", class_="content-grid-title")
h3s_lead = html_soup.find("h3", class_="content-lead-title")
for h3 in h3s:
    story_url = h3.find("a")["href"]
    story_headline = h3.text
    data_dict = {"url": story_url, "headline": story_headline}
    metadata_homepage.append(data_dict)

urls = []

for page in range(1, 3):
    urls.append(url + str(page))

grids = []
metadata = []

for u in urls:
    response = session.get(u, headers=my_headers)
    html_soup = BeautifulSoup(response.text, "html.parser")
    h3s = html_soup.findAll("h3", class_="content-list-title")
    for h3 in h3s:
        story_url = h3.find("a")["href"]
        story_headline = h3.text
        data_dict = {"url": story_url, "headline": story_headline}
        metadata.append(data_dict)

story_meta_feed_df = pd.DataFrame(metadata)
story_meta_home_df = pd.DataFrame(metadata_homepage)

story_meta_df = pd.concat([story_meta_feed_df, story_meta_home_df])

story_data = []

for row, index in story_meta_df.iterrows():
    story_response = session.get(index["url"], headers=my_headers)
    story_soup = BeautifulSoup(story_response.text, "html.parser")
    story_content = story_soup.findAll("div", attrs={"id": "main-content"})
    for cont in story_content:
        try:
            story_url = index["url"]
            story_headline = cont.find("h1", class_="entry-title").text
            story_date = cont.find("h5").text
            story_copy = cont.text
            image_caption = cont.find("img").text
            image_url = cont.find("img")["src"]
            story_dict = {
                "story_headline": story_headline,
                "story_date": story_date,
                "story_copy": story_copy,
                "image_caption": image_caption,
                "image_url": image_url,
                "story_url": story_url,
            }
        except:
            continue
        story_data.append(story_dict)

story_df = pd.DataFrame(story_data)

story_df[["updated_time", "updated_date"]] = (
    story_df["story_date"]
    .str.replace("OAN Newsroom\n", "")
    .str.replace("UPDATED ", "")
    .str.split(" –", expand=True)
)

story_df["updated_date"] = pd.to_datetime(story_df["updated_date"])
story_df["story_copy"] = story_df["story_copy"].str.replace("\n", "")
story_df["story_date"] = story_df["story_date"].str.replace("\n", "", regex=False)
story_df["story_copy"] = (
    story_df["story_copy"]
    .str.replace(f'{story_df["story_headline"][0]}', "", regex=False)
    .str.replace(f'{story_df["image_caption"][0]}', "", regex=False)
    .str.replace(f'{story_df["story_date"][0]}', "", regex=False)
)

story_df[["story_copy", "more_news"]] = story_df["story_copy"].str.split(
    "MORE NEWS:", expand=True
)

story_df.drop("story_date", axis=1, inplace=True)

df = story_df[
    [
        "updated_date",
        "updated_time",
        "story_headline",
        "story_copy",
        "image_caption",
        "image_url",
        "more_news",
        "story_url",
    ]
].copy()

df.to_csv(f"oann/data/processed/oann_top_news_{today}.csv", index=False)
# df.to_csv(f"oann/data/processed/oann_top_news_archive.csv", index=False)