const router = require('express').Router();
const { notes } = require('../../db/db.json');
//const { renderNoteList, renderActiveNote,  } = require
const uid = require('uid2'); // npm package to generate an ID value

const fs = require('fs'); // Needed here to use writeFile
const path = require('path'); // module utility to for working with file and dir paths

router.get('/notes', (req, res) => {
   console.log(req.query);
   res.json(notes);
});

router.post('/notes', (req, res) => {
   // req.body is where our incoming content will be
   req.body.id = uid(10); // to create the id of the note using uid package
   const newNote = req.body;
   notes.push(newNote); // push new note data to JS array

   // Synchronously write (doesn't require a callback function)
   // using writeFile or writeFileAsync results in error
   fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'), // path to write to
      // Save JS array data as JSON. Other two arguments used, will keep data formatted.
      JSON.stringify({ notes }, null, 2)
   );
   res.json(newNote); // replacing with newNote since that is what is being created
});

router.delete('/notes/:id', (req, res) => {
   // notes path needed /:id in order for it to work
   const id = req.params.id; // from newly generated data id
   //
   const noteIndex = notes.findIndex((element) => element.id === id);
   notes.splice(noteIndex, 1); // splice method to remove selected index in our array

   // Synchronously write (in this case "remove")
   fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'), //
      JSON.stringify({ notes }, null, 2) // keeping data formatted just as before.
   );
   res.json(notes); // leaving notes variable unchanged here due to the information it is handling in the array
});

module.exports = router;
