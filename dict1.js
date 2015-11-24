var street_name = ["West 20th Street", "West 20 Street", "20th Street", "20 Street",  "West 21st Street", "West 21 Street", "21st Street",  "21 Street",
				   "West 22nd Street", "West 22 Street", "22nd Street", "22 Street", "West 23rd Street", "West 23 Street", "23rd Street", "23 Street", 
				   "West 24th Street", "West 24 Street", "24th Street", "24 Street", "West 25th Street", "West 25 Street", "25th Street", "25 Street", 
				   "West 27th Street", "West 27 Street", "27th Street", "27 Street",
				   "West 28th Street", "West 28 Street", "28th Street", "28 Street", "West 29th Street", "West 29 Street", "29th Street", "29 Street",
				   "West 30th Street", "West 30 Street", "30th Street", "30 Street", "West 32nd Street", "West 32 Street", "32nd Street", "32 Street", 
				   "West 31st Street", "West 31 Street", "31st Street", "31 Street",
				   "West 34th Street", "West 34 Street", "34th Street", "34 Street", "West 35th Street", "West 35 Street", "35th Street", "35 Street",
				   "West 35th Place", "West 35 Place", "35th Place", "35 Place",
				   "West 36th Street", "West 36 Street", "36th Street", "36 Street", "West 36th Place", "West 36 Place", "36th Place", "36 Place",
				   "West 37th Street", "West 37 Street", "37th Street", "37 Street",
				   "West 37th Place", "West 37 Place", "37th Place", "37 Place", "West 37th drive", "West 37 drive", "37th drive", "37 drive",
				   "West Adams Boulevard", "South Vermont Avenue", "Menlo Avenue", "Ellendale Place", "Orchard Avenue",
				   "Magnolia Avenue", "Monmouth Avenue", "Hoover Street", "McClintock Avenue", "West Jefferson Boulevard", "Exposition Boulevard", "RayMond Avenue", 
				   "South Budlong Avenue", "Walton Avenue", "South Catalina Street", "South Figueroa Street", "West Martin Luther King Jr Boulevard", "South Flower Street", "South Hope Street", 
				   "South Grand Avenue", "South Hill Street", "Toberman Street", "Portland Street", "Oak Street", "West Washington Boulevard", "Norwood Street", "Park Grove Avenue", 
				   "Bonsallo Avenue", "Estrella Avenue", "Scarff Street", "Lovelace Avenue", "South Olive Street", "Severance Street", "Royal Street", "Shrine Place", "South Hill Street", 
				   "South BroadWay", "Abner Street", "Eastlake Avenue", "San Pablo Street", "Norfolk Street", "North Mission Rd", "Marengo Street", "North state Street", "CornWell Street", 
				   "North Soto Street", "San Pablo Street", "Norfolk Street", "Zonal Avenue", "Cornwell Street", "North Cummings Street", "Biggy Street", "Playground Street", "Alcazar Street", 
				   "Alhambra Avenue", "Sichel Street", "Childs Way", "Downey Way", "Watt Way", "McClintock Avenue", "Hellman Way", "Trousdale Pkwy"];

var USC_building = [
		["TCC", "PCC", "tutor center", "Tutor Campus Center"],
		["ASC","a SC”,”a taxi”,”Annenberg School", "Annenberg School for Communication and Journalism"], 
		["DRC", "School of Dramatic Arts"],
		["NCT", "NCP", "Eileen Norris Cinema Theatre"], 
		["VKC", "VTC", "BTC", "vacated", "vacation", "vacancy", "Von KleinSmid Center"], 
		["DML", "mao", "Edward L Doheny Memorial Library"], 
		["GER", "gr", "Andrus Gerontology Center"], 
		["AHF", "a half", "Allan Hancock Foundation"], 
		["LAW", "law school", "Gould School of Law"], 
		["LVL", "navy library", "the library", "V library","TV library","leave a library", "Leavey Library"], 
		["NCT", "city", "Eileen Norris Cinema Theatre"], 
		["ONE", "LONE", "OANE", "ONE National Gay & Lesbian Archives"], 
		["SSL", "Seaver Science Library"], 
		["SWC", "SWV", "Social Work Center"], 
		["DEN", "DEM", "DES", "DEN",  "Norris Dental Science Center"],
		["GEC", "Galen Center"], 
		["HER", "HDR", "the ER", "Heritage Hall"], 
		["JMC", "John McKay Center"], 
		["LRC", "Lyon Center"], 
		["PED", "be easy", "Physical Education Building"], 
		["SAL", "SL", "scal", "Salvatori Computer Science Center"], 
		["KOH", "college", "King Hall Computer Center"], 
		["WPH", "mph", "wth", "Waite Phillips Hall Computer Center"], 
		["BCI", "busy I", "PCI", "Brain and Creativity Institute"], 
		["ESH", "ESS", "Engemann Student Health Center"], 
		["SCI", "sei", "School of Cinematic Arts"], 
		["VPD", "PD", "Verna and Peter Dauterive Hall"], 
		["ANN", "AMS", "A&M","Wallis Annenberg Hall"], 
		["EFC", "Edmondson Faculty Center"], 
		["SSB", "SSD","Soto Street Building"], 
		["NRT", "Norris Cancer Research Tower"], 
		["HRA", "Health Research Association"], 
		["KMC","AMC", "Keck Hospital of USC"],
		["UTH", "UPS","Keck Hospital of USC Norris Tower"], 
		["NTT", "mp3","Norman Topping Tower"], 
		["RSC", "Rand Schrader Outpatient Clinic"], 
		["UKC","UKC", "USC Kidney Center"], 
		["NOR", "MOR", "Norris Comprehensive Cancer Center and Hospital"], 
		["NML", "NFL", "MMA","an ml","Norris Medical Library"]];

// all usc housing apartment
var USC_residential = [
		["ANH", "ANS", "Annenberg House", "711 West 27th Street Los Angeles, CA 90007"], 
		["BAA","be a egg", "bae", "Bel-Air Apartments", "1124 West 29th Street Los Angeles, CA 90007"], 
		["CAR", "Cardinal Gardens", "3131 McClintock Avenue Los Angeles, CA 90007"], 
		["CEN", "CEM", "see an", "Centennial Apartments", "2390 Portland Avenue Los Angeles, CA 90007,"], 
		["CAP", "CIP","Century Apartments", "3115 South Orchard Avenue Los Angeles, CA 90007"], 
		["FMT", "Fairmont Apartments", "2629 Portland Avenue Los Angeles, CA 90007"], 
		["FSA", "Founders Apartment", "2610 Portland Avenue Los Angeles, CA 90007"], 
		["HAP", "Helena Apartments", "1220 West 28th Street Los Angeles, CA 90007"], 
		["HIL", "Hillview Apartments", "2605 Severance Street Los Angeles, CA 90007"], 
		["HHR", "Honors House", "2710 Severance Street Los Angeles, CA 90007"], 
		["LAB", "La Sorbonne", "1170 West 31st Street Los Angeles, CA 90007"], 
		["MAB", "NAB", "Manor Apartments", "2636 Portland Street Los Angeles, 90007"], 
		["GEX", "Max Kade House", "2718 South Hoover Street Los Angeles, CA 90007"], 
		["PCA", "Pacific Apartments", "2637 Severance Street Los Angeles, CA 90007"], 
		["RTA", "Regal Trojan Apartments", "870 West Adams Boulevard Los Angeles, CA 90007"], ["RGA", "Regent Apartments", "1138 West 29th Street Los Angeles, CA 90007"], 
		["SGA", "Seven Gables Apartments", "620-626 West 30th Street Los Angeles, CA 90007"], ["SSA", "Severance Street Apartments", "2630 Severance Street Los Angeles, CA 90007"], 
		["SIE", "Sierra Apartments", "2638 Portland Street Los Angeles, CA 90007"],
		["SAI", "Stardust Apartment", "634 West 27th Street Los Angeles, CA 90007"], 
		["SUN", "Sunset Apartments", "1144 West 29th Street Los Angeles, CA 90007"], 
		["TSA", "Terrace Apartments", "1275 West 29th Street Los Angeles, CA 90007"], 
		["TRE", "Troy East", "3025 Royal Street Los Angeles, CA 90007"], 
		["TRH", "Troy Hall", "3025 Royal Street Los Angeles, CA 90007"], 
		["TAP", "Troyland Apartments", "955-59 West Adams Boulevard Los Angeles, CA 90007"], 
		["TPA", "Twin Palms Apartments", "2635 Portland Street Los Angeles, CA 90007"], 
		["URA", "University Regent Apartments", "1219 West 27th Street Los Angeles, CA 90007"], 
		["VIS", "Vista Apartments", "2701 Severance Street Los Angeles, CA 90007"], 
		["WIN", "WIM", "Windsor Apartments", "1149 West 28th Street Los Angeles, CA 90007"],
		["lorenzo", "325 W Adams Blvd, Los Angeles, CA 90007"], 
		["city park", "1247 W 30th St, Los Angeles, CA 90007"],
		["gateway", "3335 S Figueroa St, Los Angeles, CA 90007"], 
		["tuscany", "3770 S Figueroa St, Los Angeles, CA 90007"]];
