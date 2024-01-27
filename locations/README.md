# Locations
A collection of simple scrapers for collecting data about the locations of popular stores, restaurants and other consumer sites.  

|Company|Locations*|Data|Code|
|:---  |---: |:---  |:---  |
|[Abercrombie & Fitch](https://github.com/stiles/locations/tree/main/abercrombie-fitch)|1|[CSV](https://github.com/stiles/locations/blob/main/abercrombie-fitch/data/processed/bank_of_america_locations.csv), [GeoJSON](https://github.com/stiles/locations/blob/main/abercrombie-fitch/data/processed/bank_of_america_locations.geojson)|[Notebook]()|
|[Apple Stores](https://github.com/stiles/locations/tree/main/apple-stores)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Bank of America](https://github.com/stiles/locations/tree/main/bank-of-america)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Burger King](https://github.com/stiles/locations/tree/main/burger-king)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Carl's Jr.](https://github.com/stiles/locations/tree/main/carls-jr)|1,026|[CSV](), [GeoJSON]()|[Notebook]()|
|[Chick-Fil-A](https://github.com/stiles/locations/tree/main/chick-fil-a)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Chili's](https://github.com/stiles/locations/tree/main/chilis)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Cracker Barrel](https://github.com/stiles/locations/tree/main/cracker-barrel)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Del Taco](https://github.com/stiles/locations/tree/main/del-taco)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Dunkin Donuts](https://github.com/stiles/locations/tree/main/dunkin-donuts)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[El Pollo Loco](https://github.com/stiles/locations/tree/main/el-pollo-loco)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Hollister](https://github.com/stiles/locations/tree/main/hollister)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[In-N-Out Burger](https://github.com/stiles/locations/tree/main/in-n-out)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Jared](https://github.com/stiles/locations/tree/main/jared)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Krispy Kreme](https://github.com/stiles/locations/tree/main/krispy-kreme)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Kung Fu Tea](https://github.com/stiles/locations/tree/main/kung-fu-tea)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Menchies](https://github.com/stiles/locations/tree/main/menchies)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Ralphs](https://github.com/stiles/locations/tree/main/ralphs)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Safeway](https://github.com/stiles/locations/tree/main/safeway)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Sephora](https://github.com/stiles/locations/tree/main/sephora)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Shake Shack](https://github.com/stiles/locations/tree/main/shake-shack)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Trader Joe's](https://github.com/stiles/locations/tree/main/trader-joes)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Ulta](https://github.com/stiles/locations/tree/main/ulta)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Vons](https://github.com/stiles/locations/tree/main/vons)|1|[CSV](), [GeoJSON]()|[Notebook]()|
|[Whataburger](https://github.com/stiles/locations/tree/main/whataburger)|1|[CSV](), [GeoJSON]()|[Notebook]()|

*This repo is a *slow* work in progress, and I make no guarantees about the accuracy of the data collected here. Please [let me know](mailto:mattstiles@gmail.com) if you have questions or concerns — or if there's a company you'd like to see on this list.

---

## Installation
The notebooks in this repo require Python 3.9 and Jupyer Lab. A virtual environment, such as [`pipenv`](https://pipenv.pypa.io/en/latest/), is reccommended. 

To get stated, clone the repo and navigate into it using the terminal. 

Next, run `pipenv shell` to create a virual environment. 

Then, run `pipenv install` to add the dependancies ([Pandas](https://pandas.pydata.org/), [Geopandas](https://geopandas.org/en/stable/), etc.) you'll need.

You should be ready to work. Run `jupyter lab` to launch the browser interface.

## Alternative approach

Clone repo and navigate into it using the terminal. Install a few requirements, if not already installed (assumes macOS and homebrew):

    $ brew install geos
    $ brew install freetype

Create and activate virtual environment:

    $ python3 -m venv env
    $ source env/bin/activate

Install Rust and its package manager, Cargo. Get the latest install instructions [here](https://www.rust-lang.org/tools/install).

Install Python packages:

    $ pip install -r requirements.txt

You should be ready to work. Run `jupyter lab` to launch the browser interface.

When finished, run `deactivate` to "leave" the virtual environment.

You'll need to run `source env/bin/activate` each time, which is a bit more cumbersome than using pipenv.