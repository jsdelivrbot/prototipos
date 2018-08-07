console.log('Files has been executed');

const add_note = () => {
    console.log('New Note has been added')
}

const delete_note = (a, b) => {
    return a + b;
}

module.exports.add_note = add_note;
module.exports.delete_note = delete_note;