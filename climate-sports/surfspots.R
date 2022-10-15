setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

install.packages("stringr", "readr", "tidyverse", "tidyr", "dplyr", "xlsx", "lubridate","ggplot2", "gganimate")
getwd()

install.packages("devtools")
library(devtools)
devtools::install_github("munichrocker/DatawRappr", force = TRUE)
library(DatawRappr)

library(stringr)
library(readr)
library(tidyverse)
library(tidyr)
library(dplyr)
library(xlsx)
library(lubridate)
require(jsonlite)
require(zoo)
library(ggplot2)
library(gganimate)


install.packages("geojsonR")
library(geojsonR)
file_js = FROM_GeoJson("data/raw/layers/services5.arcgis.com/FDIcdEEqy1cBDX8N/Surf_Breaks_vs_Rising_Sea_Levels_CACACA_WFL1/CA_SLR_Impacts.geojson")


download.file("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json", destfile = paste0(getwd(),"/data/raw/cities.geojson"))
