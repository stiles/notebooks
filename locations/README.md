# Locations
A growing collection of data scrapers that collect information about the locations of popular stores, restaurants and other consumer sites.

![starbucks locations](starbucks/visuals/visualization.png)

|Company|Locations*|Formats|
|:---  |---: |:---  |
|[Abercrombie & Fitch](https://github.com/stiles/locations/tree/main/abercrombie-fitch)|223|[CSV](https://github.com/stiles/locations/blob/main/abercrombie-fitch/data/processed/bank_of_america_locations.csv), [GeoJSON](https://github.com/stiles/locations/blob/main/abercrombie-fitch/data/processed/bank_of_america_locations.geojson)|
|[Aldi](https://github.com/stiles/locations/tree/main/apple-stores)|2,357|[CSV](), [GeoJSON]()|
|[Apple Stores](https://github.com/stiles/locations/tree/main/apple-stores)|526|[CSV](), [GeoJSON]()|
|[Au Bon Pain](https://github.com/stiles/locations/tree/main/au-bon-pain)|71|[CSV](), [GeoJSON]()|
|[Bank of America](https://github.com/stiles/locations/tree/main/bank-of-america)|6,066|[CSV](), [GeoJSON]()|
<!-- |[Burger King](https://github.com/stiles/locations/tree/main/burger-king)|tk|[CSV](), [GeoJSON]()| -->
|[Carl's Jr.](https://github.com/stiles/locations/tree/main/carls-jr)|1,026|[CSV](), [GeoJSON]()|
|[Chick-Fil-A](https://github.com/stiles/locations/tree/main/chick-fil-a)|tk|[CSV](), [GeoJSON]()|
|[Chili's](https://github.com/stiles/locations/tree/main/chilis)|tk|[CSV](), [GeoJSON]()|
|[Cracker Barrel](https://github.com/stiles/locations/tree/main/cracker-barrel)|tk|[CSV](), [GeoJSON]()|
|[Del Taco](https://github.com/stiles/locations/tree/main/del-taco)|tk|[CSV](), [GeoJSON]()|
|[Dunkin Donuts](https://github.com/stiles/locations/tree/main/dunkin-donuts)|tk|[CSV](), [GeoJSON]()|
|[El Pollo Loco](https://github.com/stiles/locations/tree/main/el-pollo-loco)|tk|[CSV](), [GeoJSON]()|
|[Hardee's](https://github.com/stiles/locations/tree/main/hardies)|1,419|[CSV](), [GeoJSON]()|
|[Hollister](https://github.com/stiles/locations/tree/main/hollister)|tk|[CSV](), [GeoJSON]()|
|[In-N-Out Burger](https://github.com/stiles/locations/tree/main/in-n-out)|tk|[CSV](), [GeoJSON]()|
|[Jared](https://github.com/stiles/locations/tree/main/jared)|tk|[CSV](), [GeoJSON]()|
|[JCPenney](https://github.com/stiles/locations/tree/main/jcpenney)|663|[CSV](), [GeoJSON]()|
|[Krispy Kreme](https://github.com/stiles/locations/tree/main/krispy-kreme)|tk|[CSV](), [GeoJSON]()|
|[Kung Fu Tea](https://github.com/stiles/locations/tree/main/kung-fu-tea)|tk|[CSV](), [GeoJSON]()|
|[Menchies](https://github.com/stiles/locations/tree/main/menchies)|tk|[CSV](), [GeoJSON]()|
|[Nike Stores](https://github.com/stiles/locations/tree/main/nike-stores)|tk|[CSV](), [GeoJSON]()|
|[Pei Wei](https://github.com/stiles/locations/tree/main/pei-wei)|121|[CSV](), [GeoJSON]()|
|[Pinkberry](https://github.com/stiles/locations/tree/main/pinkberry)|tk|[CSV](), [GeoJSON]()|
|[Pizza Hut](https://github.com/stiles/locations/tree/main/pizza-hut)|5,204|[CSV](), [GeoJSON]()|
|[Ralphs](https://github.com/stiles/locations/tree/main/ralphs)|tk|[CSV](), [GeoJSON]()|
|[Safeway](https://github.com/stiles/locations/tree/main/safeway)|tk|[CSV](), [GeoJSON]()|
|[Sephora](https://github.com/stiles/locations/tree/main/sephora)|tk|[CSV](), [GeoJSON]()|
|[Shake Shack](https://github.com/stiles/locations/tree/main/shake-shack)|tk|[CSV](), [GeoJSON]()|
|[Starbucks](https://github.com/stiles/locations/tree/main/starbucks)|16,288|[CSV](), [GeoJSON]()|
|[Torchy's Tacos](https://github.com/stiles/locations/tree/main/torchys-tacos)|124|[CSV](), [GeoJSON]()|
|[Trader Joe's](https://github.com/stiles/locations/tree/main/trader-joes)|tk|[CSV](), [GeoJSON]()|
|[Ulta](https://github.com/stiles/locations/tree/main/ulta)|tk|[CSV](), [GeoJSON]()|
|[Vons](https://github.com/stiles/locations/tree/main/vons)|tk|[CSV](), [GeoJSON]()|
|[Whataburger](https://github.com/stiles/locations/tree/main/whataburger)|tk|[CSV](), [GeoJSON]()|

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