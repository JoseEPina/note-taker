const router = require('express').Router();
const { renderNoteList } = require('../../public/assets/js/renderNotes.js');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
   let results = notes;
   console.log(req.query);
   if (req.query) {
      results = renderNoteList(req.query, results);
   }
   res.json(results);
});

module.exports = router;
