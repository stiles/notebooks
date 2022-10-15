### import required libraries
import pandas as pd
import requests
import bs4

### set up google sheets connection
from oauth2client.service_account import ServiceAccountCredentials
import gspread
from df2gspread import df2gspread as d2g

scope = ["https://spreadsheets.google.com/feeds"]
credentials = ServiceAccountCredentials.from_json_keyfile_name(
    "abortion/jupyter-integration-credentials.json", scope
)
gc = gspread.authorize(credentials)

spreadsheet_key = "1x0SgJ83gfsVSvyb7p19BH7Mg5b14EfAFEYRLBj2DLO4"
book = gc.open_by_key(spreadsheet_key)

### get data from current abortion bans interactive map

headers = {
    "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
    "Referer": "https://www.gunviolencearchive.org/",
    "sec-ch-ua-mobile": "?0",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36",
    "sec-ch-ua-platform": '"macOS"',
}

request = requests.get(
    "https://states.guttmacher.org/policies/guttmacher.json", headers=headers
)
data = request.json()

guttmacher_src = pd.DataFrame(data)

### upload it to google sheets
wks_name = "overview"
d2g.upload(
    guttmacher_src, spreadsheet_key, wks_name, credentials=credentials, row_names=False
)

### get parental consent data
url = "https://www.guttmacher.org/state-policy/explore/parental-involvement-minors-abortions"
page = requests.get(url)
soup = bs4.BeautifulSoup(page.text, "html.parser")
table = soup.find("table")
df = pd.read_html(str(table), header=2)[0]

df.columns = [
    "state",
    "consent_only",
    "notif_and_consent",
    "notification_only",
    "other_relatives",
    "id",
    "parental_proof",
    "minor_id",
]

### upload it to google sheets

wks_name = "parental_consent"
d2g.upload(df, spreadsheet_key, wks_name, credentials=credentials, row_names=False)

### get bans and gestational age data
exceptions_url = (
    "https://www.guttmacher.org/state-policy/explore/state-policies-later-abortions#"
)

exceptions_page = requests.get(exceptions_url)
excp_soup = bs4.BeautifulSoup(exceptions_page.text, "html.parser")
excp_table = excp_soup.find("table")
exceptions_df = pd.read_html(str(excp_table), header=2)[0]

exceptions_df.columns = [
    "statutory_limit",
    "state",
    "life",
    "general_helath",
    "physical_health",
    "other",
]

exceptions_df["statutory_limit"] = exceptions_df["statutory_limit"].fillna(
    method="ffill"
)

ban_exceptions = exceptions_df[exceptions_df["statutory_limit"] != "TOTAL IN EFFECT"]
ban_exceptions.columns = ban_exceptions.columns.str.lower().str.replace(" ", "_")

### upload it to google sheets
wks_name = "gestationalage_exceptions"
d2g.upload(
    ban_exceptions, spreadsheet_key, wks_name, credentials=credentials, row_names=False
)