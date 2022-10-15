import pandas as pd
from datawrapper import Datawrapper
import requests

dw = Datawrapper(access_token='FtIwtvFtoGLaRT9a3gjX69PLu4wSuRyKddoOz6SOPw3k9wWyNICMHTkcPhOGCR5Z')

cutoff_date = "2021-09-01"

### Wheat

headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Dylan2010.EntitlementToken': '57494d5ed7ad44af85bc59a51dd87c90',
    'sec-ch-ua-mobile': '?0',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
    'sec-ch-ua-platform': '"macOS"',
    'Origin': 'https://www.wsj.com',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Dest': 'empty',
    'Referer': 'https://www.wsj.com/',
    'Accept-Language': 'en-US,en;q=0.9,es;q=0.8',
}

params = {
    'json': '{"Step":"P1D","TimeFrame":"P1Y","StartDate":1616457600000,"EndDate":1647993600000,"EntitlementToken":"57494d5ed7ad44af85bc59a51dd87c90","IncludeMockTick":true,"FilterNullSlots":false,"FilterClosedPoints":true,"IncludeClosedSlots":false,"IncludeOfficialClose":true,"InjectOpen":false,"ShowPreMarket":false,"ShowAfterHours":false,"UseExtendedTimeFrame":true,"WantPriorClose":false,"IncludeCurrentQuotes":false,"ResetTodaysAfterHoursPercentChange":false,"Series":[{"Key":"FUTURE/US/XCBT/W00","Dialect":"Charting","Kind":"Ticker","SeriesId":"s1","DataTypes":["Last"],"Indicators":[{"Parameters":[{"Name":"Period","Value":"200"}],"Kind":"SimpleMovingAverage","SeriesId":"i2"}]}]}',
    'ckey': '57494d5ed7',
}

response = requests.get('https://api.wsj.net/api/michelangelo/timeseries/history', headers=headers, params=params)

wheat_raw = response.json()

wheat_dates = pd.Series(wheat_raw["TimeInfo"]["Ticks"])

wheat_values = []

for price in wheat_raw["Series"][0]["DataPoints"]:
    wheat_values.append(price[0])

wheat_values_series = pd.Series(wheat_values)

wheat_df = pd.concat([wheat_dates, wheat_values_series], axis=1)

wheat_df.columns = ["timestamp", "value"]

wheat_df["date"] = pd.to_datetime(wheat_df["timestamp"], unit="ms").dt.strftime(
    "%Y-%m-%d"
)

wheat_df["dollars_per_bushel"] = (wheat_df["value"] / 100).round(2)

wheat_df[wheat_df["date"] > cutoff_date].to_csv(
    "ukraine/data/processed/tracker_wheat_prices.csv", index=False
)

dw.add_data(chart_id="nHFIW", data=wheat_df[wheat_df["date"] > cutoff_date])

### 

fertilizer_raw = pd.read_json(
    "https://fertilizerpricing.com/wp-content/themes/greenmarkets/fcharts/fchart_lib/json/data_open.php"
)

historical = []

for d in fertilizer_raw["data"][0]:
    data_dict = {"timestamp": d[0], "value": d[1]}
    historical.append(data_dict)

fertilizer_df = pd.DataFrame(historical)

fertilizer_df["date"] = pd.to_datetime(
    fertilizer_df["timestamp"], unit="ms"
).dt.strftime("%Y-%m-%d")

fertilizer_df[fertilizer_df["date"] > cutoff_date].to_csv(
    "ukraine/data/processed/tracker_fertilizer_prices.csv", index=False
)

dw.add_data(chart_id="WPSUZ", data=fertilizer_df[fertilizer_df["date"] > cutoff_date])

### Nickel

nickel_src = pd.read_csv("ukraine/data/raw/nickel.csv")

nickel_src.columns = nickel_src.columns.str.lower()

nickel_src["date"] = pd.to_datetime(nickel_src["date"])

nickel_df = nickel_src[["date", "close"]]

nickel_df[nickel_df["date"] > cutoff_date].to_csv(
    "ukraine/data/processed/tracker_nickel_prices.csv", index=False
)

dw.add_data(chart_id="1daCt", data=nickel_df[nickel_df["date"] > cutoff_date])
