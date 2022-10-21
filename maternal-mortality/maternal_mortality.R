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

install.packages("rnaturalearth")
install.packages("rnaturalearthdata")

library(rnaturalearth)
library(rnaturalearthdata)





