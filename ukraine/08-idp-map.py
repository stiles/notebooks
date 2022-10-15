import pandas as pd
import urllib.request, json
from datawrapper import Datawrapper

dw = Datawrapper(access_token='FtIwtvFtoGLaRT9a3gjX69PLu4wSuRyKddoOz6SOPw3k9wWyNICMHTkcPhOGCR5Z')

current_locations = pd.read_excel(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBhkh7ViRJzyQI3vg2IymuTZ94VDQuPlmZgFDlSB2Ub0LMT-2j2xBmxUnMmbLZbcyapUqRfbNr3Eh6/pub?output=xlsx",
    sheet_name="Current location of IDPs",
    skiprows=1,
)
origins = pd.read_excel(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBhkh7ViRJzyQI3vg2IymuTZ94VDQuPlmZgFDlSB2Ub0LMT-2j2xBmxUnMmbLZbcyapUqRfbNr3Eh6/pub?output=xlsx",
    sheet_name="IDPs by Region of Origin",
    skiprows=1,
)
current_locations.to_csv("ukraine/data/processed/idp_current.csv", index=False)

origins.to_csv("ukraine/data/processed/idp_origin.csv", index=False)

dw.add_data(chart_id="J5Zzg", data=origins)
dw.add_data(chart_id="EQDPf", data=current_locations)
