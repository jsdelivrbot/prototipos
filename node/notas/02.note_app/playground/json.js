const fs = require('fs');

let original_note = {
    "title":"Some title",
    "body":"Some Body"
}

let original_note_string = JSON.stringify(original_note)
fs.writeFileSync(original_note_string('notes.json', original_note_string))

let note_string = fs.readFilesSync('notes.json');

