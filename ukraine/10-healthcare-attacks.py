import pandas as pd
from datawrapper import Datawrapper

dw = Datawrapper(access_token="FtIwtvFtoGLaRT9a3gjX69PLu4wSuRyKddoOz6SOPw3k9wWyNICMHTkcPhOGCR5Z")

from datetime import date

#get data from WHO

today = date.today()
enddate = today.strftime("%Y-%m-%d")
url = (
    "https://extranet.who.int/ssa/Ref/GetDashboardFullReport?Countries=229&Types=0&DaterangeSTART=2022-02-24&DaterangeEND="
    + enddate
)

hc_attacks = pd.read_json(url)

# process data and get weekly and cumulative numbers
hc_attacks.columns = hc_attacks.columns.str.replace(" ", "_").str.lower()

hc_attacks.attackdate = pd.to_datetime(hc_attacks.attackdate, dayfirst=True)

confirmed_hc_attacks_bydate = (
    hc_attacks[hc_attacks["classification"] == "Confirmed"]
    .groupby("attackdate")
    .size()
    .reset_index(name="count")
)


weekly_confirmed_hc_attacks = (
    confirmed_hc_attacks_bydate.groupby(pd.Grouper(key="attackdate", freq="W-SUN"))[
        "count"
    ]
    .sum()
    .reset_index(name="attacks")
)

weekly_cumulative = (
    weekly_confirmed_hc_attacks.groupby("attackdate")
    .sum()["attacks"]
    .cumsum()
    .reset_index(name="cumulative")
)

weekly_and_cumulative = weekly_confirmed_hc_attacks.merge(
    weekly_cumulative, on="attackdate"
)

weekly_hc_attacks_metrics = (
    hc_attacks[hc_attacks.classification == "Confirmed"]
    .groupby(pd.Grouper(key="attackdate", freq="W-SUN"))
    .sum()
    .reset_index()
    .drop(["id", "versionid", "classificationid"], axis=1)
)

weekly_deaths_injuries_dw = weekly_hc_attacks_metrics[
    ["attackdate", "victimstotalinjured", "victimstotaldeath"]
]

# update datawrapper items

dw.add_data(chart_id="QSTwE", data=weekly_and_cumulative)

dw.add_data(chart_id="xyBKc", data=weekly_deaths_injuries_dw)

# save data in repo

hc_attacks.to_csv("ukraine/data/raw/raw_hcattacks.csv")

weekly_and_cumulative.to_csv("ukraine/data/processed/weekly_hcattacks.csv")

weekly_deaths_injuries_dw.to_csv("ukraine/data/processed/weekly_hc_injuriesdeaths.csv")