import env
import pathlib
import pandas as pd


def raw_csv(path, **kwargs):
    """
    Read the provided CSV from the raw data folder.
    
    Returns a pandas dataframe.
    """
    full_path = env.RAW_DATA_DIR.joinpath(path)
    df = pd.read_csv(full_path, **kwargs)
    print(f"💽 ./raw/{path} ➡️ {len(df)} records")
    return df


def processed_csv(path, **kwargs):
    """
    Read the provided CSV from the processed data folder.
    
    Returns a pandas dataframe.
    """
    full_path = env.PROCESSED_DATA_DIR.joinpath(path)
    df = pd.read_csv(full_path, **kwargs)
    print(f"💽 ./processed/{path} ➡️ {len(df)} records")
    return df


def baker_json(path, **kwargs):
    """
    Read in the provided path from the baker _data folder.
    
    Returns a pandas dataframe.
    """
    full_path = env.BAKER_DIR.joinpath(path)
    df = pd.read_json(full_path, **kwargs)
    print(f"💽 ./raw/{path} ➡️ {len(df)} records")
    return df