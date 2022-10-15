setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

install.packages("stringr", "readr", "tidyverse", "tidyr", "dplyr", "xlsx", "lubridate","ggplot2", "gganimate")


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


shootings_wapo<- read_csv("https://raw.githubusercontent.com/washingtonpost/data-school-shootings/master/school-shootings-data.csv", 
                          col_types = cols(state_fips = col_character(),
                                           county_fips = col_character()))



shootings_wapo$date=parse_date_time(shootings_wapo$date, c("%m/%d/%y", "%m/%d/%Y"), tz="UTC")



matt <- shootings_wapo %>%
  filter(date > "2012-01-01",
         date < "2012-04-01")

write_csv(shootings_wapo, file = paste0(getwd(), "/waposhootings.csv"))


