import pandas as pd
import requests
import json
import os
from datetime import datetime

today = datetime.today().strftime("%Y%m%d")

oauth_token = os.environ.get("FOURSQUARE_TOKEN")

# CNN on Sunset
venueId = "4d0ac809b93b224b9d6048bf"

ll = "34.0977087,-118.3323517"

v = today

url = "https://api.foursquare.com/v2/checkins/add?oauth_token={}&venueId={}&ll={}&v={}"

r = requests.post(url.format(oauth_token, venueId, ll, v))

print(r.json())

print(today)