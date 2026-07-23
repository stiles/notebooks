import os
import subprocess

"""
Collect all six layers from this service: https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/AGOL_Base_2018_Final/FeatureServer
""" 

base_url = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/AGOL_Base_2018_Final/FeatureServer/'

layers = {
    0: "generations_country",
    1: "generations_state",
    2: "generations_county",
    3: "generations_zipcodes",
    4: "generations_tracts",
    5: "generations_block_groups",
}

# Ensure the output directory exists
output_dir = 'data/raw'
os.makedirs(output_dir, exist_ok=True)

for l, z in layers.items():
    input_url = f'{base_url}{l}'
    output_file = os.path.join(output_dir, f'{z}.geojson')
    command = f'esri2geojson "{input_url}" "{output_file}"'
    print(f"Running command: {command}")
    subprocess.run(command, shell=True, check=True)

print("Data fetching and conversion complete.")
