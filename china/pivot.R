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

DP_LIVE_22072022162730773 <- read_csv("data/raw/DP_LIVE_22072022162730773.csv", 
                                      col_types = cols(TIME = col_date(format = "%Y")))
library(readr)
API_SI_POV_GINI_DS2_en_csv_v2_4333947 <- read_csv("data/raw/API_SI.POV.GINI_DS2_en_csv_v2_4333947.csv")
View(API_SI_POV_GINI_DS2_en_csv_v2_4333947)
gini <- DP_LIVE_22072022162730773 %>%
  filter(LOCATION == "CHN",
         SUBJECT == "GINI")

years=colnames(API_SI_POV_GINI_DS2_en_csv_v2_4333947[5:66])

#who_gini <- API_SI_POV_GINI_DS2_en_csv_v2_4333947 %>%
#  filter(`Country Code` == "CHN") 
who_gini <- API_SI_POV_GINI_DS2_en_csv_v2_4333947 %>%
  pivot_longer(cols = years, names_to = "year", values_to = "gini")


who_gini <- who_gini %>%
  mutate(gini_coeff = gini/100)

write_csv(who_gini, file = paste0(getwd(),"/data/raw/long_who_data_allcountries.csv"))
