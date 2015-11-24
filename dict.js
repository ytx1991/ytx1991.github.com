// all street name in crusier area
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

// key work for street name
var street_key_word = [["Adams", "West Adams Boulevard"], ["Vermont", "South Vermont Avenue"], ["Menlo", "Menlo Avenue"], 
					   ["Ellendale", "Ellendale Place"], ["Magnolia", "Magnolia Avenue"], ["Orchard", "Orchard Avenue"], ["Monmouth", "Monmouth Avenue"], 
					   ["Hoover", "Hoover Street"], ["McClintock", "McClintock Avenue"], ["Jefferson", "West Jefferson Boulevard"], 
					   ["Exposition", "Exposition Boulevard"],
					   ["RayMond", "RayMond Avenue"], ["Budlong", "South Budlong Avenue"], ["Walton", "Walton Avenue"], ["Catalina", "South Catalina Street"], 
					   ["Figueroa", "South Figueroa Street"], ["Martin Luther King Jr", "West Martin Luther King Jr Boulevard"], ["Flower", "South Flower Street"], 
					   ["Hope", "South Hope Street"], ["Grand", "South Grand Avenue"],["Hill", "South Hill Street"], ["Toberman", "Toberman Street"],
					   ["Portland", "Portland Street"], ["Oak", "Oak Street"], ["Washington", "West Washington Boulevard"], ["Norwood", "Norwood Street"], 
					   ["Park Grove", "Park Grove Avenue"], 
					   ["Bonsallo", "Bonsallo Avenue"], ["Estrella", "Estrella Avenue"], ["Scarff", "Scarff Street"], ["Lovelace", "Lovelace Avenue"],
					   ["Olive", "Oak Street"],["Severance", "Severance Street"],
					   ["Royal",  "Royal Street"], ["Shrine", "Shrine Place"], ["Hill", "South Hill Street"], ["BroadWay","South BroadWay"], ["Abner", "Abner Street"], 
					   ["Eastlake", "Eastlake Avenue"], ["San Pablo", "San Pablo Street"], ["Norfolk", "Norfolk Street"], ["Mission", "North Mission Rd"], 
					   ["Marengo", "Marengo Street"], 
					   ["state", "North state Street"], ["CornWell", "CornWell Street"],
					   ["Soto", "North Soto Street"], ["San Pablo", "San Pablo Street"], ["Norfolk", "Norfolk Street"], ["Zonal", "Zonal Avenue"], 
					   ["Cornwell", "Cornwell Street"], ["Cummings", "North Cummings Street"], ["Biggy", "Biggy Street"], ["Playground", "Playground Street"], 
					   ["Alcazar", "Alcazar Street"], ["Alhambra", "Alhambra Avenue"], ["Sichel", "Sichel Street"], ["Childs", "Childs Way"],
					   ["Downey", "Downey Way"], ["Watt", "Watt Way"], ["McClintock", "McClintock Avenue"], ["Hellman", "Hellman Way"], ["Trousdale", "Trousdale Pkwy"]];

// all building in the USC campus
var USC_building = [["TCC", "Tutor Campus Center"], ["ASC", "Annenberg School for Communication and Journalism"], ["DRC", "School of Dramatic Arts"],
					["NCT", "Eileen Norris Cinema Theatre"], ["VKC", "Von KleinSmid Center"], ["DML", "Edward L Doheny Memorial Library"], 
					["GER", "Andrus Gerontology Center"], ["AHF", "Allan Hancock Foundation"], ["LAW", "Gould School of Law"], 
					["LVL", "Leavey Library"], ["NCT", "Eileen Norris Cinema Theatre"], ["ONE", "ONE National Gay & Lesbian Archives"], 
					["SSL", "Seaver Science Library"], ["SWC", "Social Work Center"], ["DEN", "Norris Dental Science Center"],
					["GEC", "Galen Center"], ["HER", "Heritage Hall"], ["JMC", "John McKay Center"], 
					["LRC", "Lyon Center"], ["PED", "Physical Education Building"], ["SAL", "Salvatori Computer Science Center"], ["KOH", "King Hall Computer Center"], 
					["WPH", "Waite Phillips Hall Computer Center"], ["BCI", "Brain and Creativity Institute"], ["ESH", "Engemann Student Health Center"], 
					["SCI", "School of Cinematic Arts"], ["VPD", "Verna and Peter Dauterive Hall"], ["ANN", "Wallis Annenberg Hall"], 
					["EFC", "Edmondson Faculty Center"], ["SSB", "Soto Street Building"], ["NRT", "Norris Cancer Research Tower"], ["HRA", "Health Research Association"], 
					["KMC", "Keck Hospital of USC"],
					["UTH", "Keck Hospital of USC Norris Tower"], ["NTT", "Norman Topping Tower"], ["RSC", "Rand Schrader Outpatient Clinic"], 
					["UKC", "USC Kidney Center"], ["NOR", "Norris Comprehensive Cancer Center and Hospital"], ["NML", "Norris Medical Library"]];

// all usc housing apartment
var USC_residential = [["ANH", "Annenberg House", "711 West 27th Street Los Angeles, CA 90007"], ["BAA", "Bel-Air Apartments", "1124 West 29th Street Los Angeles, CA 90007"], 
					   ["CAR", "Cardinal Gardens", "3131 McClintock Avenue Los Angeles, CA 90007"], ["CEN", "Centennial Apartments", "2390 Portland Avenue Los Angeles, CA 90007,"], 
					   ["CAP", "Century Apartments", "3115 South Orchard Avenue Los Angeles, CA 90007"], ["FMT", "Fairmont Apartments", "2629 Portland Avenue Los Angeles, CA 90007"], 
					   ["FSA", "Founders Apartment", "2610 Portland Avenue Los Angeles, CA 90007"], 
					   ["HAP", "Helena Apartments", "1220 West 28th Street Los Angeles, CA 90007"], ["HIL", "Hillview Apartments", "2605 Severance Street Los Angeles, CA 90007"], 
					   ["HHR", "Honors House", "2710 Severance Street Los Angeles, CA 90007"], ["LAB", "La Sorbonne", "1170 West 31st Street Los Angeles, CA 90007"], 
					   ["MAB", "Manor Apartments", "2636 Portland Street Los Angeles, 90007"], ["GEX", "Max Kade House", "2718 South Hoover Street Los Angeles, CA 90007"], 
					   ["PCA", "Pacific Apartments", "2637 Severance Street Los Angeles, CA 90007"], 
					   ["RTA", "Regal Trojan Apartments", "870 West Adams Boulevard Los Angeles, CA 90007"], ["RGA", "Regent Apartments", "1138 West 29th Street Los Angeles, CA 90007"], 
					   ["SGA", "Seven Gables Apartments", "620-626 West 30th Street Los Angeles, CA 90007"], ["SSA", "Severance Street Apartments", "2630 Severance Street Los Angeles, CA 90007"], 
					   ["SIE", "Sierra Apartments", "2638 Portland Street Los Angeles, CA 90007"],
					   ["SAI", "Stardust Apartment", "634 West 27th Street Los Angeles, CA 90007"], ["SUN", "Sunset Apartments", "1144 West 29th Street Los Angeles, CA 90007"], 
					   ["TSA", "Terrace Apartments", "1275 West 29th Street Los Angeles, CA 90007"], ["TRE", "Troy East", "3025 Royal Street Los Angeles, CA 90007"], 
					   ["TRH", "Troy Hall", "3025 Royal Street Los Angeles, CA 90007"], ["TAP", "Troyland Apartments", "955-59 West Adams Boulevard Los Angeles, CA 90007"], 
					   ["TPA", "Twin Palms Apartments", "2635 Portland Street Los Angeles, CA 90007"], ["URA", "University Regent Apartments", "1219 West 27th Street Los Angeles, CA 90007"], 
					   ["VIS", "Vista Apartments", "2701 Severance Street Los Angeles, CA 90007"], 
					   ["WIN", "Windsor Apartments", "1149 West 28th Street Los Angeles, CA 90007"],
					   ["", "lorenzo", "325 W Adams Blvd, Los Angeles, CA 90007"], ["", "city park", "1247 W 30th St, Los Angeles, CA 90007"],
					   ["", "gateway", "3335 S Figueroa St, Los Angeles, CA 90007"], ["", "tuscany", "3770 S Figueroa St, Los Angeles, CA 90007"]];

var Confirm_word = ["yes", "yep", "ye", "okay", "ok", "sure", "right", "that is right", "correct", "that is correct"];
var Unconfirm_word = ["no", "nope", "that is not right", "that is not correct", "wrong", "that is wrong"];

var number_str = [["one","1"], ["two","2"], ["three","3"], ["four","4"], ["five","5"], ["six","6"], ["seven","7"], ["eight","8"], ["nine","9"], ["ten","10"], ["eleven","11"], ["twelve","2"], ["thirteen","13"], ["fourteen","14"], ["fifteen","15"], ["sixteen","16"], ["seventeen","17"], ["eighteen","18"], ["nineteen","19"], ["twenty","20"]] 

