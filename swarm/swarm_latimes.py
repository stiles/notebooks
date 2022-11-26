import pandas as pd
import requests
import json
import os
from datetime import datetime

today = datetime.today().strftime("%Y%m%d")

oauth_token = os.environ.get("FOURSQUARE_TOKEN")

# Venue ID (LA Times)
venueId = "5b4bd8aacad1b60036b3c14f"

ll = "33.996267331394606,-118.38981975734914"

v = today

url = "https://api.foursquare.com/v2/checkins/add?oauth_token={}&venueId={}&ll={}&v={}"

r = requests.post(url.format(oauth_token, venueId, ll, v))