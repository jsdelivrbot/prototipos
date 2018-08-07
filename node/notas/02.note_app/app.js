console.log('Start App');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0]

if(command === 'add') {
    notes.add_note(argv.title, argv.body);
}
else if (command === 'list') {
    console.log('Listing all notes');
    notes.get_all(argv.title, argv.body);
}
else if(command === 'remove') {
    console.log('removing note');
    notes.remove_note(argv.title, argv.body);
}
else {
    console.log('command not recognized');
}