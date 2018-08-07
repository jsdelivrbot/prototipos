console.log('Files has been executed');

let add_note = (title, body) => {
    console.log('Adding Note', title, body)
}

const get_all = () => {
    console.log('Getting all notes');
}

const get_note = (title, body) => {
    console.log('Getting Note', title, body)
}

const remove_note = (title, body) => {
    console.log('Removing Note', title, body)
}

module.exports = {
    add_note,
    get_all,
    get_note,
    remove_note
}