import os
import subprocess

"""
Collect all six layers from this service: https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/AGOL_Base_2018_Final/FeatureServer
""" 

base_url = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/ACS_Specific_Asian_Groups_Boundaries/FeatureServer'
topic = 'asians'

layers = {
    0: f"{topic}_state",
    1: f"{topic}_county",
    2: f"{topic}_tract",
}

# Ensure the output directory exists
output_dir = '../data/raw'
os.makedirs(output_dir, exist_ok=True)

# Make sure you don't have a slash at the end of your base_url
for l, z in layers.items():
    input_url = f'{base_url}/{l}'
    output_file = os.path.join(output_dir, f'{z}.geojson')
    command = f'esri2geojson "{input_url}" "{output_file}"'
    print(f"Running command: {command}")
    subprocess.run(command, shell=True, check=True)

print("Data fetching and conversion complete.")
