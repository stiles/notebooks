import pandas as pd
import requests
import json
import os
from datetime import datetime

today = datetime.today().strftime("%Y%m%d")

oauth_token = os.environ.get("FOURSQUARE_TOKEN")

# Menchie's Culver City
venueId = "4a66295bf964a52024c81fe3"

ll = "33.996267331394606,-118.38981975734914"

v = today

url = "https://api.foursquare.com/v2/checkins/add?oauth_token={}&venueId={}&ll={}&v={}"

r = requests.post(url.format(oauth_token, venueId, ll, v))