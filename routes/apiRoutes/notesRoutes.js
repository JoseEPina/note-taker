const router = require('express').Router(); // creates common router
const { notes } = require('../../db/db.json'); // to connect to Database - db.json
const uid = require('uid2'); // npm package to generate an ID value

const fs = require('fs'); // Needed here to use writeFile, writeFileSync or writeFileAsync
const path = require('path'); // module utility to for working with file and directory paths

const { createNewNote, deleteNoteById } = require('../../lib/handleNotes');

// GET
router.get('/notes', (req, res) => {
   res.json(notes);
});

// POST
router.post('/notes', (req, res) => {
   req.body.id = uid(10); // assigns unique ID to the *new note* using uid package
   const note = createNewNote(req.body, notes); // create new note in db.json using our module
   res.json(note); // returns new as JSON data
});

// DELETE
router.delete('/notes/:id', (req, res) => {
   // notes path needed /:id in order for it to work
   const id = req.params.id; // from newly generated data id
   deleteNoteById(id, notes); // delete new note in db.json using our module
   res.json(notes); // leaving notes variable unchanged here due to the information it is handling in the array
});

module.exports = router;
