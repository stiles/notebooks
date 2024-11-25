# Codebook for 2000-2020 County Presidential Data

The data file `countypres_2000-2020` contains county-level returns for presidential elections from 2000 to 2020. The data source is official state election data records.

Note: County results in Alaska for 2004 are based on official Alaska data, but it is clear the district returns significantly overstate the number of votes cast. In Alaska, the county_fips field stores a combination of state FIPS code and district.

Date updated: 2021-06-08
## Variables
The variables are listed as they appear in the data file. 

### year
- **Description**: election year	

------------------

### state 
- **Description**: state name 

-----------------

### state_po
- **Description**: U.S. postal code state abbreviation

----------------

### county_name
- **Description**: county name

----------------

### county_fips
- **Description**: county FIPS code

----------------

### office
- **Description**: President

----------------

### candidate
- **Description**: name of the candidate

----------------

### party
- **Description**: party of the candidate; takes form of DEMOCRAT, REPUBLICAN, GREEN, LIBERTARIAN, or OTHER

----------------
	
### candidatevotes 
 - **Description**: votes received by this candidate for this particular party

----------------

### totalvotes
 - **Description**: total number of votes cast in this county-year

----------------

### mode
 - **Description**: mode of ballots cast; default is TOTAL, with different modes specified for 2020

----------------

### version
- **Description**: date when dataset was finalized

----------------
