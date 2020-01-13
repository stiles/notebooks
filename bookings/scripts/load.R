setwd(paste(path, "/files", sep = ""))

# set up connection to postgresql
drv <- dbDriver("PostgreSQL")
con = dbConnect(drv, user="postgres", password="postgres",
                host="localhost", port=5432, dbname="arrests-2016-11-28")

# list tables
dbListTables(con)

## get all data
# arrests
arrests <- dbReadTable(con, "lapd_arrest")
saveRDS(arrests, file = "arrests.RDS")
#View(table(arrests$arrestee_address)) ## see different ways of spelling 'transient'

# charges
charges <- dbReadTable(con, "lapd_charge")
saveRDS(charges, file = "charges.RDS")

# codes
codes <- dbReadTable(con, "lapd_legalcode")
saveRDS(codes, file = "codes.RDS")

setwd(paste(path, "/code", sep = ""))
