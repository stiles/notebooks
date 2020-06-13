import pathlib
import archieml
from dateutil import parser as dateparser

# Set the directories we need
THIS_DIR = pathlib.Path(__file__).parent.absolute()
NOTEBOOKS_DIR = THIS_DIR.parent.absolute()
DATA_DIR = NOTEBOOKS_DIR.joinpath("data")
RAW_DATA_DIR = DATA_DIR.joinpath("raw")
PROCESSED_DATA_DIR = DATA_DIR.joinpath("processed")
ROOT_DIR = NOTEBOOKS_DIR.parent.absolute()
BAKER_DIR = ROOT_DIR.joinpath("_data")


def get_meta():
    path = BAKER_DIR.joinpath("meta.aml")
    with open(path) as f:
        data = archieml.load(f)
    return data


def get_date_in_progress():
    meta = get_meta()
    return dateparser.parse(meta['date_in_progress'])