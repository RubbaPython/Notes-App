const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('Note added...')
  }
  else {
    console.log("Note title exists...")
  }

}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
  catch (e) {
    return []
  }

}

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter(note => note.title !== title);

  if (notes.length === newNotes.length) {
    console.log(chalk.bgRed('Note not found...'));
  }
  else {
    console.log(chalk.bgGreen('Note removed successfully'));
    saveNotes(newNotes);
  }
}

const listNotes = () => {
  console.log(chalk.green(getNotes()));
  const notes = loadNotes();
  for (let note of notes) {
    console.log(note.title);
  }

}

const readNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find(note => note.title === title)
  if (noteFound) {
    console.log('Title found...')
    console.log(`title: ${chalk.green(noteFound.title)}`)
    console.log(`body: ${noteFound.body}`)
  }
  else {
    console.log(chalk.red('No title found...'))
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}