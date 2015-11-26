var maxEditDistance = 0.5;  //maximun normalized editDistance we accept 

//Returns [0, address] if find a complete match (street, building or residential).
//Returns [1, street name] if find street match, but do not have street number before.
//Returns [100, "no match"] if no match
function getAddr(str) {
    var addr = matchStreet(str);
    var hold = [100, 'no match', ''];
    if (addr[0] == 0)
        return addr;
    if (addr[0] == 1)
        hold = addr;

    addr = matchBuilding(str);
    if (addr[0] == 0)
        return addr;

    addr = vagueMatch(str);
    if (addr[0] == 0)
        return addr;
    else
        return hold;
}

//Returns number of people
function getPeople(str) {
    var number = 1;
    var matches = str.match(/[0-9]+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty/ig);
    if (matches)
        var count = matches.length; //number of numbers we can extract
    else
        return 1;   //if no number extraceted, assume only one person
    if (!isNaN(Number(matches[count - 1])))   //See if the last match is a digit number or a string number
        number = matches[count - 1];
    else {
        for (i = 1; i < number_str.length; i++) {
            if (matches[count - 1].match(new RegExp(number_str[i][0], 'i')))
                number = number_str[i][1];
        }
    }
    if (str.match(/and/) && (str.match(/me/) || str.match(/myself/))) { //if ther are "me and", "and myself" or other similar expressions, add 1
        return number + 1;    //use the last number in case there are any corrections
    }
    else
        return number;
}


//return true is str contains any word in Confirm_word, false otherwise
function isConfirm(str) {
    for (i = 0; i < Confirm_word.length; i++) {
        if (str.match(new RegExp(Confirm_word[i], 'i')))
            return true;
    }
    return false;
}

//Check if match any of the street names
function matchStreet(str) {
    var result = [100, "no match", ''];
    for (i = 0; i < street_name.length; i++) {
        for (j = 0; j < street_name[i].length; j++) {
            var match = str.match(new RegExp(street_name[i][j], 'i'));
            if (match) {    //match street_name
                var streetNum = str.match(new RegExp('([0-9]+\\s)' + match, 'i'));    //match if there is number before street name 
                if (streetNum)
                    result = [0, streetNum[1] + street_name[i][street_name[i].length - 1], ''];
                else
                    result = [1, street_name[i][street_name[i].length - 1], ''];
            }
        }
    }
    return result;
}

//Check if match any of USC buildings (full name or variations) 
function matchBuilding(str) {
    var result = [100, "no match", 'USC']
    for (i = 0; i < USC_building.length; i++) {
        for (j = 0; j < USC_building[i].length; j++) {
            if (str.match(new RegExp('\\b' + USC_building[i][j] + '\\b', 'i')))
                result = [0, USC_building[i][USC_building[i].length - 1], 'USC'];
        }
    }
    return result;
}

//match an address keyword followed by 'go to', etc. if there is number at the begining of the match, return [match number], otherwise, return [match, '']. If no match, return [str, '']
function extractKeyword(str) {
    var split = str.split(/go to |going to |at |in the |is |are /gi);
    var numberMatch = split[split.length - 1].match(/([0-9]+\s)(.+)/i)  //if there is number between the match, assume it's a street number
    if (numberMatch)
        return [numberMatch[2], numberMatch[1]];
    else
        return [split[split.length - 1], '']
}

//if the edit distance of the address extracted from the str and any names in the dictionary is less than certain amount, then return the address. otherwise, return no match.
function vagueMatch(str) {
    var kw = extractKeyword(str)[0];
    var streetNum = extractKeyword(str)[1];
    var minDist = 10000;
    var matchStr = '';
    var matchType = '';
    for (i = 0; i < street_name.length; i++) {
        for (j = 0; j < street_name[i].length; j++) {
            dist = getEditDistance(kw.toLowerCase(), street_name[i][j].toLowerCase());
            if (dist < minDist) {
                minDist = dist;
                matchStr = street_name[i][street_name[i].length - 1];
                matchType = 'street';
            }
        }
    }
    for (i = 0; i < USC_building.length; i++) {
        for (j = 0; j < USC_building[i].length; j++) {
            dist = getEditDistance(kw.toLowerCase(), USC_building[i][j].toLowerCase());
            if (dist < minDist) {
                minDist = dist;
                matchStr = USC_building[i][USC_building[i].length - 1];
                matchType = 'building';
            }
        }
    }
    if (minDist / kw.length < maxEditDistance) {
        if (matchType == 'street') {
            if (streetNum == '')
                return [1, matchStr, ''];
            else
                return [0, streetNum + matchStr, ''];
        }
        else
            return [0, matchStr, 'USC'];
    }
    else
        return [100, "no match", ''];
}

/*
Copyright (c) 2011 Andrei Mackenzie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Compute the edit distance between the two given strings
function getEditDistance(a, b) {
    if (a.length == 0) return b.length;
    if (b.length == 0) return a.length;

    var matrix = [];

    // increment along the first column of each row
    var i;
    for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    var j;
    for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                                        Math.min(matrix[i][j - 1] + 1, // insertion
                                                 matrix[i - 1][j] + 1)); // deletion
            }
        }
    }

    return matrix[b.length][a.length];
};

/*
//Check if match any of USC residentials (full name or abbreviation) 
function matchResidential(str){
    for (i=0; i<USC_residential.length; i++){
        if (str.match(new RegExp('\\b'+USC_residential[i][0]+'\\b', 'i')) || str.match(new RegExp(USC_residential[i][1], 'i')))    
            return [0, USC_residential[i][2]];       
    }
    return [100, "no match"];
}
*/
/*
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
*/