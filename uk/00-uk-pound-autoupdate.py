### setup necessary packages

import requests
import urllib.request
import datetime
import pandas as pd
from datawrapper import Datawrapper

dw = Datawrapper(
    access_token="PU52xuCQowgE5BFprvdnpFXzd5Ql9ISOSLBk58eNR2ykPztw0yC5fpqLTfsZdhyR"
)

### get exchange rate data
import urllib.request, json

with urllib.request.urlopen(
    "https://api.stlouisfed.org/fred/series/observations?series_id=DEXUSUK&api_key=b98b54e0ff7221aca6e1b161f5b12435&file_type=json"
) as url:
    data = json.loads(url.read().decode())
    print(data["observations"])
    
### make data frame and apply filters
dataframes = []
for d in data["observations"]:
    dataframes.append(pd.DataFrame(d, index=[0]))
    
df = pd.concat(dataframes).reset_index(drop=True)

df["date"] = pd.to_datetime(df["date"])

df_22 = (
    df[(df["date"] >= "2022-01-01") & (df["value"] != ".")][["date", "value"]]
    .reset_index(drop=True)
)

### update data in datawrapper and republish

dw.add_data(chart_id="7uU6X", data=df_22)
dw.publish_chart("7uU6X", display=False)
