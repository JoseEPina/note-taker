const router = require('express').Router();
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
   let results = notes;
   console.log(req.query);
   // if (req.query) {
   //    results = filterByQuery(req.query, results);
   // }
   res.json(results);
});

module.exports = router;
