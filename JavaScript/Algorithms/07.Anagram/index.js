// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let char_map_a = char_map(stringA);
    let char_map_b = char_map(stringB);

    if(Object.keys(char_map_a).length !== Object.keys(char_map_b).length){
        return false
    }

    for(let key in char_map_a) {
        if(char_map_a[key] !== char_map_b[key]) {
            return false;
        }
    }

    return true;
}

function char_map(str){
    let char_map = {};
    let new_word = str.replace(/[^\w]/g, '').toLowerCase();
    for(let letter of new_word) {
        if(char_map[letter]) {
            char_map[letter]++
        }
        else {
            char_map[letter] = 1;
        }
    }
    
    return char_map;
}

module.exports = anagrams;
