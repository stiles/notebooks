setwd(paste(path, "/files", sep = ""))

arrests <- readRDS("arrests.RDS")
charges <- readRDS("charges.RDS")
codes <- readRDS("codes.RDS")

## merge the arrests (transient addresses) with the charges, by id in the former & arrest_id in the latter
charges <- charges %>% select(-id, -no_bail)
arrests.charges <- merge(arrests, charges, by.x = 'id', by.y = 'arrest_id', all.x = T)

arrests.charges %>% filter(is.na(legal_code_id == T)) # check the merge
arrests.charges <- arrests.charges %>% rename(arrest_id = id)

## merge these with the codes file, by legal_code_id in the former & id in the latter
arrests.charges.codes <- merge(arrests.charges, codes, by.x = 'legal_code_id', by.y = 'id', all.x = T)

arrests.charges.codes %>% filter(is.na(raw_code == T)) # check the merge 

## add codes from Gale's email
mydata <- arrests.charges.codes

mydata$selected.codes <- ifelse(grepl("41.18", mydata$raw_code), "sidewalk", 
                                ifelse(grepl("41.45", mydata$raw_code), "shop_cart", 
                                       ifelse(grepl("22435", mydata$name), "shop_cart", 
                                              ifelse(grepl("56.11", mydata$raw_code), "leave_stuff", 
                                                     ifelse(grepl("647", mydata$raw_code), "lodging", 
                                                            ifelse(grepl("41.47.2", mydata$raw_code), "urine", 
                                                                   ifelse(grepl("41.22", mydata$raw_code), "loiter_river", 
                                                                          ifelse(grepl("41.59", mydata$raw_code), "solicit",
                                                                                 "none"
                                                                          ))))))))

## reformat months
mydata$year.month <- format(mydata$arrest_date, format="%Y-%m")
mydata$year <- as.numeric(format(mydata$arrest_date, format="%Y"))
mydata$month <- format(mydata$arrest_date, format="%b")

mydata$homeless <- ifelse(grepl("TRANSIENT", mydata$arrestee_address, ignore.case=TRUE) | 
                            grepl("TRASIENT", mydata$arrestee_address, ignore.case=TRUE), 1, 0)

mydata$month <- factor(mydata$month, levels = c("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"), ordered = T)

# ## felonies vs. misdemeanors
# 
# mydata$felony <- ifelse(mydata$level == "F", 1, 0)
# 
# felonies <- mydata %>% group_by(arrest_id) %>% summarize(felony = sum(felony))
# mydata <- merge(mydata, felonies, by = 'arrest_id')
# 
# mydata$felony <- mydata$felony.y 
# mydata <- mydata %>% select(-felony.x, -felony.y) 
# mydata <- mydata %>% filter(year > 2008) # take out 2008 (incomplete data)

mydata$ymd <- as.Date(format(mydata$arrest_date,"%Y-%m-%d"))
mydata$ymd.booking <- as.Date(format(mydata$booking_date,"%Y-%m-%d"))

mydata <- mydata %>% filter(ymd > "2010-01-31") # take out anything before Jan 31 2010  (incomplete data)


saveRDS(mydata, file = "mydata.RDS")


