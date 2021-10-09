const router = require('express').Router();
const path = require('path');

// path navitation to index.html page
router.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// path navitation to notes.html page
router.get('/notes', (req, res) => {
   res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// navigation defaults to index.html
router.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
