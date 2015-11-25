

//Returns [0, address] if find a complete match (street, building or residential).
//Returns [1, street name] if find street match, but do not have street number before.
//Returns [100, "no match"] if no match
function getAddr(str){
    var addr = matchStreetName(str);
    if (addr[0] == 0 || addr[0] == 1)
        return addr;
    
    addr = matchStreetKeyword(str);
    if (addr[0] == 0 || addr[0] == 1)
        return addr;
    
    addr = matchBuilding(str);
    if (addr[0] == 0 || addr[0] == 1)
        return addr;
    
    addr = matchResidential(str);
    if (addr[0] == 0 || addr[0] == 1)
        return addr;
    
    return addr;
}

//Returns number of people
function getPeople(str){
    matches = str.match(/[0-9]+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty/ig);
    if (matches)        
        var count = matches.length; //number of numbers we can extract
    else
        return 1;   //if no number extraceted, assume only one person
    if (!isNaN(Number(matches[count-1])))   //See if the last match is a digit number or a string number
        number = matches[count-1];
    else{
        for(i=1; i<number_str.length; i++){
            if (matches[count-1].match(new RegExp(number_str[i][0], 'i')))
                number = number_str[i][1];
        }
    }        
    if (str.match(/and/) && (str.match(/me/) || str.match(/myself/))){ //if ther are "me and", "and myself" or other similar expressions, add 1
        return number + 1;    //use the last number in case there are any corrections
    }
    else
        return number;        
}

//return true is str contains any word in Confirm_word, false otherwise
function isConfirm(str){
    for (i=0; i<Confirm_word.length; i++){
        if (str.match(new RegExp(Confirm_word[i], 'i')))
            return true;
    }
    return false;       
}

//Check if match any of the street names
function matchStreetName(str){
    for (i=0; i<street_name.length; i++){
        if (str.match(new RegExp(street_name[i], 'i'))){    //match street_name
            var fullAddr = str.match(new RegExp('[0-9]+\\s' + street_name[i], 'i'));    //match if there is number before street name            
            if(fullAddr)
                return [0, fullAddr];
            else
                return [1, street_name[i]];
        }
    }
    return [100, "no match"];
}


    
//Check if match any of the street keywords    
function matchStreetKeyword(str){
    for (i=0; i<street_key_word.length; i++){
        if (str.match(new RegExp(street_key_word[i][0], 'i'))){    //match street_name_keyword
            var fullAddr = str.match(new RegExp('([0-9]+)\\s' + street_key_word[i][0], 'i'));    //match if there is number before street name
            if(fullAddr)
                return [0, fullAddr];
            else
                return [1, street_key_word[i][1]];
        }
        
    }
    return [100, "no match"];
}

//Check if match any of USC buildings (full name or abbreviation) 
function matchBuilding(str){
    for (i=0; i<USC_building.length; i++){
        if (str.match(new RegExp('\\b'+USC_building[i][0]+'\\b', 'i')) || str.match(new RegExp(USC_building[i][1], 'i')))    
            return [0, USC_building[i][1]];       
    }
    return [100, "no match"];
}

//Check if match any of USC residentials (full name or abbreviation) 
function matchResidential(str){
    for (i=0; i<USC_residential.length; i++){
        if (str.match(new RegExp('\\b'+USC_residential[i][0]+'\\b', 'i')) || str.match(new RegExp(USC_residential[i][1], 'i')))    
            return [0, USC_residential[i][2]];       
    }
    return [100, "no match"];
}

   