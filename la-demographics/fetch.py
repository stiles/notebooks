import ezesri
import numpy as np
import pandas as pd
import geopandas as gpd
import matplotlib.pyplot as plt
from cartopy import crs as ccrs
from matplotlib.colors import ListedColormap, BoundaryNorm
import matplotlib.font_manager as fm
import matplotlib.patheffects as path_effects

# Set Roboto as the default font
plt.rcParams["font.family"] = "Roboto"

# Reference layers
la_city_boundary_url = "https://stilesdata.com/gis/la_city_boundary.geojson"
la_hoods_url = "https://stilesdata.com/gis/la_city_hoods_county_munis.geojson"

# Read neighborhoods and cities and exclude Catalina Island
la_hoods_src = gpd.read_file(la_hoods_url)
la_hoods_gdf = la_hoods_src.query('~name.str.contains("Catalina|Avalon")').copy()

# Define Esri service paths
blocks_url = "https://services.arcgis.com/RmCCgQtiZLDCtblq/ArcGIS/rest/services/Census_2020_SRR/FeatureServer/5"
tracks_url = (
    "https://maps.lacity.org/arcgis/rest/services/Mapping/NavigateLA/MapServer/59"
)

# Extract metadata and layer from service
metadata = ezesri.get_metadata(blocks_url)
gdf_src = ezesri.extract_layer(blocks_url)  # Keep areas with no residents
# Lower case columns
gdf_src.columns = gdf_src.columns.str.lower()

# Exclude Catalina and San Clemente islands
blocks_to_exclude = ["599100", "599000"]
gdf = gdf_src.query("~ct20.isin(@blocks_to_exclude)").copy()

# Which fields are available?                ed
# for field in metadata["fields"]:
#     print(f'{field["name"].lower()}: {field["alias"]}')

# Define variable metadata with proper titles, descriptions, color schemes, clean breaks, and key neighborhoods
variable_config = {
    "pc_nh_wht": {
        "title": "Percent non-Hispanic white",
        "label": "Percent non-Hispanic white population",
        "colors": ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4"],
        "breaks": [0, 10, 25, 50, 75, 100],
        "neighborhoods": ["Beverly Hills", "Manhattan Beach", "Santa Monica", "Redondo Beach"]
    },
    "pc_nh_blk": {
        "title": "Percent non-Hispanic Black",
        "label": "Percent non-Hispanic Black population", 
        "colors": ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a"],
        "breaks": [0, 5, 15, 30, 50, 85],
        "neighborhoods": ["Compton", "Inglewood", "Carson", "Ladera Heights"]
    },
    "pc_nh_asn": {
        "title": "Percent non-Hispanic Asian",
        "label": "Percent non-Hispanic Asian population",
        "colors": ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4"],
        "breaks": [0, 5, 15, 30, 50, 90],
        "neighborhoods": ["Monterey Park", "Alhambra", "Arcadia", "Rowland Heights"]
    },
    "pc_hispanic": {
        "title": "Percent Hispanic or Latino",
        "label": "Percent Hispanic or Latino population",
        "colors": ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8"],
        "breaks": [0, 20, 40, 60, 80, 100],
        "neighborhoods": ["Boyle Heights", "Huntington Park"]
    },
    "pc_lessthan_hs": {
        "title": "Percent without high school diploma",
        "label": "Percent without high school diploma",
        "colors": ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c"],
        "breaks": [0, 10, 20, 30, 40, 100],
        "neighborhoods": ["Huntington Park"]
    },
    "pc_eng_below": {
        "title": "Percent with limited English proficiency", 
        "label": "Percent with limited English proficiency",
        "colors": ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0"],
        "breaks": [0, 10, 20, 30, 40, 80],
        "neighborhoods": ["Koreatown", "Monterey Park", "Alhambra"]
    },
    "med_hh_incm": {
        "title": "Median household income",
        "label": "Median household income ($)",
        "colors": ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476"],
        "breaks": [0, 50000, 75000, 100000, 150000, 250000],
        "neighborhoods": ["Beverly Hills", "Manhattan Beach", "Palos Verdes Estates", "Malibu"]
    },
    "pov100rate20": {
        "title": "Population below poverty line rate",
        "label": "Population below poverty line rate",
        "colors": ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a"],
        "breaks": [0, 10, 20, 30, 50, 100],
        "neighborhoods": ["Watts", "Westlake", "Pico-Union", "MacArthur Park"]
    }
}

# Mapping selected variables
columns_to_map = list(variable_config.keys())

# Print top areas for each variable
print("=== TOP AREAS BY DEMOGRAPHIC VARIABLE ===\n")
for column in columns_to_map:
    if column in gdf.columns:
        config = variable_config[column]
        # Get top 5 areas for this variable (excluding null values)
        valid_gdf = gdf.dropna(subset=[column])
        if len(valid_gdf) > 0:
            top_areas = valid_gdf.nlargest(5, column)[['ct20', column]].copy()
            
            print(f"{config['title']}:")
            for idx, row in top_areas.iterrows():
                if column == "med_hh_incm":
                    print(f"  Block {row['ct20']}: ${row[column]:,.0f}")
                else:
                    print(f"  Block {row['ct20']}: {row[column]:.0f}%")
        else:
            print(f"{config['title']}: No valid data found")
        print()

for column in columns_to_map:
    config = variable_config[column]
    
    # Use the predefined clean breaks
    breaks = config["breaks"]
    
    # Use the configured color scheme plus gray for no-data areas
    color_scheme = ["#f0f0f0"] + config["colors"]  # Gray first, then data colors
    cmap = ListedColormap(color_scheme)
    
    # Create a copy of the data for mapping, filling NAs with a special value
    gdf_mapped = gdf.copy()
    gdf_mapped[f"{column}_mapped"] = gdf_mapped[column].fillna(-999)  # Special value for no data

    # Initialize plot with structured layout
    fig = plt.figure(figsize=(10, 10))
    fig.patch.set_facecolor('white')
    
    # Create main map axes taking up most of the space
    ax = fig.add_axes([0.05, 0.0, 0.9, 0.85])  # [left, bottom, width, height]
    ax.axis("off")

    # Create custom breaks that include no-data category
    extended_breaks = [-999] + breaks  # No-data break + regular breaks
    
    # Create the choropleth map
    gdf_mapped.plot(
        ax=ax,
        column=f"{column}_mapped",
        cmap=cmap,
        linewidth=0.05,
        edgecolor="#ffffff",
        scheme="User_Defined",
        classification_kwds=dict(bins=extended_breaks),
        legend=False,
        alpha=1
    )

    # Plot neighborhood boundaries
    la_hoods_gdf.boundary.plot(ax=ax, linewidth=0.4, color="white", alpha=0.8)
    
    # Add text labels for key neighborhoods for this variable
    key_neighborhoods = config.get("neighborhoods", [])
    if key_neighborhoods:
        # Filter neighborhoods that match the key names
        highlighted_hoods = la_hoods_gdf[la_hoods_gdf['name'].isin(key_neighborhoods)].copy()
        
        if not highlighted_hoods.empty:
            # Add text labels at neighborhood centroids with halo effect
            for idx, row in highlighted_hoods.iterrows():
                # Get centroid coordinates
                centroid = row.geometry.centroid
                x, y = centroid.x, centroid.y
                
                # Add text label with white halo for readability
                text = ax.annotate(row['name'], xy=(x, y), ha='center', va='center',
                                 fontsize=9, fontweight='bold', color='black', alpha=0.6)
                
                # Add white halo/outline effect
                text.set_path_effects([path_effects.withStroke(linewidth=2, foreground='white')])
    
    # Set map extent to the filtered data bounds (exclude islands)
    ax.set_xlim(gdf_mapped.total_bounds[0], gdf_mapped.total_bounds[2])
    ax.set_ylim(gdf_mapped.total_bounds[1], gdf_mapped.total_bounds[3])

    # Add title at top of figure, closer to content
    # fig.suptitle(config["title"], fontsize=16, fontweight='bold', y=0.98)

    # Position colorbar between title and map, closer together
    cbar_width = 0.4
    cbar_height = 0.01
    cbar_x = 0.5 - (cbar_width / 2)  # Center horizontally on figure
    cbar_y = 0.90  # Closer below title, above map
    
    cbar_ax = fig.add_axes([cbar_x, cbar_y, cbar_width, cbar_height])

    # Format tick labels to include "No residents" + data labels
    if column == "med_hh_incm":
        data_labels = [f"${int(x):,}" for x in breaks]
    else:
        # All other variables are percentages - use clean integers
        data_labels = [f"{int(x)}%" for x in breaks]
    
    # Combine "No residents" label with data labels  
    tick_labels = ["No residents"] + data_labels
    tick_positions = [-999] + breaks  # Position for "No residents" + regular positions

    # Create colorbar with extended breaks
    cbar = fig.colorbar(
        plt.cm.ScalarMappable(cmap=cmap, norm=BoundaryNorm(extended_breaks, cmap.N)),
        cax=cbar_ax,
        orientation="horizontal",
        ticks=tick_positions,
    )
    
    # Style the colorbar
    cbar.set_label(config["label"], fontsize=10, labelpad=8)
    cbar.ax.set_xticklabels(tick_labels, fontsize=8)
    cbar.ax.tick_params(size=0)  # Remove tick marks
    cbar.outline.set_linewidth(0.5)
    cbar.outline.set_edgecolor('#cccccc')

    # Save with no extra padding
    plt.savefig(f"./visuals/lacounty_demographics_map_{column}.png", 
                dpi=300, bbox_inches="tight", facecolor='white', edgecolor='none', pad_inches=0.05)
    plt.close()

# Save the geodataframe once after all maps are created
gdf.to_file("./data/processed/lacounty_demographics_blocks.geojson", driver="GeoJSON")