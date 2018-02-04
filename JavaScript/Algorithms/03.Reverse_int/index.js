// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed_int = n.toString().split('').reverse().join('');
    return parseInt(reversed_int) * Math.sign(n);
}


module.exports = reverseInt;


// My solution

// function reverseInt(n) {
//     if(n === 0){
//         return 0
//     }
//     let result = '';
//     let sign = Math.sign(n)
//     let reversed_number = n.toString();
//         reversed_number = reversed_number.split('').reverse().join('');

//     result = reversed_number
//     for(let int of reversed_number) {
//         if(int === '0'){
//             result = result.substring(1)
//         }
//         else {
//             break
//         }
//     }

//     if(sign === -1){
//         result = parseInt('-' + result.split('-').join(''));
//     }
//     else {
//          result = parseInt(result);
//     }
//     return result
// }