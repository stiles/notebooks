import pandas as pd
from datawrapper import Datawrapper
import urllib.request, json

dw = Datawrapper(access_token='FtIwtvFtoGLaRT9a3gjX69PLu4wSuRyKddoOz6SOPw3k9wWyNICMHTkcPhOGCR5Z')

all_url = (
    "https://raw.githubusercontent.com/OCHA-DAP/hdx-scraper-ukraine-viz/main/all.json"
)

with urllib.request.urlopen(all_url) as url:
    data = json.loads(url.read().decode())

dataframes = []

for d in data.keys():
    dataframes.append(pd.DataFrame(data[d]))

fatalities_data = dataframes[2]

fatalities_data.columns = fatalities_data.columns.str.replace(
    "#", "", regex=False
).str.replace("+", "_", regex=False)

loc_eventcount = (
    fatalities_data.groupby(["loc_name", "geo_lat", "geo_lon"])
    .size()
    .reset_index(name="count")
)

loc_eventcount.to_csv("ukraine/data/processed/eventcount-byloc.csv", index=False)

dw.add_data(chart_id="Atfk1", data=loc_eventcount)

