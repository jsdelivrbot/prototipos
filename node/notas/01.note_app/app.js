console.log('Start App');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

// notes.add_note();
console.log(notes.delete_note(9, 1));
console.log(_.isString('Ever'));

// let user = os.userInfo();
// console.log(user)

// // (para name of file, text being appended)
// // apendFileSync -- other option two parameters
// fs.appendFile('greetings.txt', `Hello ${ user.username }`, function(error){
//     if(error) {
//         console.log('Unable to write file');
//     }
// })