import env
import json
import pathlib
import numpy as np
import pandas as pd


class NpEncoder(json.JSONEncoder):
    """
    Serialize numpy dtypes to JSON.
    """
    def default(self, obj):
        if pd.isnull(obj):
            return None
        elif isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        else:
            return super(NpEncoder, self).default(obj)


def baker_json(
    df,
    path,
    indent=2,
    dtype={},
    serialize_dates=[],
    verbose=True,
    force_list=False,
    **kwargs
):
    """
    Write the provided dataframe to the provided path in the _data folder

    Returns nothing.
    """
    if verbose:
        # Log it out
        print(f"💽 {len(df)} records ➡️ ./_data/{path}")

    # Make of the copy of the dataframe before we edit it
    copy = df.copy(deep=True)

    # Clean up date fields
    for field in serialize_dates:
        copy[field] = copy[field].dt.strftime("%Y-%m-%d")

    # Clean up data types
    for field, dtype in dtype.items():
        copy[field] = copy[field].astype(dtype)

    # Set the full path
    full_path = env.BAKER_DIR.joinpath(path)

    # Create its directory, if it doesn't already exist
    full_path.parent.mkdir(parents=True, exist_ok=True)

    # If there's more than one record, write out a records list
    if len(df) > 1 or force_list:
        copy.to_json(
            full_path,
            indent=indent,
            orient="records",
            **kwargs
        )
    # If there's only one record, write out a single JSON object
    else:
        d = copy.to_dict("records")[0]
        for key, value in d.items():
            if type(value) is not list and pd.isnull(value):
                d[key] = None
        with open(full_path, 'w') as f:
            json.dump(
                d,
                f,
                indent=indent,
                cls=NpEncoder
            )


def baker_json_by_county(df, path, drop=[], **kwargs):
    """
    Write the provided dataframe out to the provided directory with one JSON file per county.

    Returns nothing.
    """
    county_list = list(df.county.unique())
    if drop:
        df = df.drop(drop, axis=1)
    print(f'Writing {len(county_list)} county files to {path}')
    for county in county_list:
        slug = county.lower().replace(" ", "_")
        county_df = df[df.county == county]
        county_path = pathlib.Path(path).joinpath(f"{slug}.json")
        baker_json(county_df, county_path, verbose=False, **kwargs)


def processed_csv(df, path, index=False, **kwargs):
    """
    Write the provided pandas dataframe to the processed data folder.

    Returns nothing.
    """
    # Set the full path
    full_path = env.PROCESSED_DATA_DIR.joinpath(path)

    # Create its directory, if it doesn't already exist
    full_path.parent.mkdir(parents=True, exist_ok=True)

    # Write out the file
    df.to_csv(full_path, index=index)
    print(f"💽 {len(df)} records ➡️ ./processed/{path}")
