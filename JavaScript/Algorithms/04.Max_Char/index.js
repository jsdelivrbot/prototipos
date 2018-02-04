// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const char_map = {};
    let max = 0;
    let max_char = '';

    for(let letter of str){
        if(char_map[letter]){
            char_map[letter]++;
        }
        else {
            char_map[letter] = 1;
        }
    }

    for(let char in char_map){
        if(char_map[char] > max){
            max = char_map[char];
            max_char = char
        }
    }

    return max_char
}

module.exports = maxChar;
