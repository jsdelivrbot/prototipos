// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((letter, index) => {
        return letter === str[str.length - index - 1]
    })
}

module.exports = palindrome;


// my solution... yuck!!

// function palindrome(str) {
//     let reversed = str.split('').reduce((reversed, letter) => {
//         return letter + reversed;
//     })
//     reversed = reversed.split(' ').join('');
//     let palindrome = null;
//     if(str === reversed){
//         palindrome = true;
//     }
//     else {
//         palindrome = false;
//     }
//     return palindrome
// }

// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return reversed === str;
// }