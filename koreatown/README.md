# Koreatown property ownership
Matching common Korean surnames to Los Angeles building and parcel data in hopes of answering the question: How much do Koreans own in Koreatown? 

**The analysis is a work in progress, but ... a good bit?**

## What's going on here?

To answer the question, I downloaded [parcels](https://permitting.gis.lacounty.gov/permitting/rest/services/energovDev/ViewableDev/MapServer/8) data from Los Angeles County. I then clipped that massive countywide dataset to the boundaries of the Koreantown neighborhood, as [defined](http://s3-us-west-2.amazonaws.com/boundaries.latimes.com/archive/1.0/boundary/koreatown-la-county-neighborhood-current.geojson) by the *Los Angeles Times* [datadesk](https://github.com/datadesk).

Thankfully, the parcels records have an `ownername` field, which I used to setset the data based on a list of the top Korean surnames (Kim, Lee, Park, Choi, Chung, Cho, etc...). The parcel records also have a `usetype` field, allowing for some grouping and aggregates of those Korean (and Non-Korean) owners by property type. 

## What share do 'Koreans' own?

People with Korean surnames account for a significant portion of the properties, at least according to this quick analysis, which can't account for non-ethnic company names listed on many (mostly commercial) properties: 

| Parcel Type | Share of ownership |
| --- | --- |
Residential | 37.5%
Commercial | 14.7%
Institutional | 11.1%
Industrial | 3.4%

The work in progress part is my attempt to relate the parcels findings with the more specific building footprint file. Here's what I have so far:

![Map of Koreatown Buildings](https://raw.githubusercontent.com/stiles/notebooks/master/koreatown/map.png)
