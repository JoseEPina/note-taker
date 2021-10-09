const express = require('express');
const { notes } = require('./db/db.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// const fs = require('fs');
// const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming JSON data
app.use(express.json());
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// express.static() method. The way it works is that we provide a file path to a location in our application
// (in this case, the public folder) and instruct the server to make these files static resources.
// This means that all of our front-end code can now be accessed without having a specific server endpoint created for it!
// Every time we create a server that will serve a front end as well as JSON data, we'll always want to use this middleware.
app.use(express.static('public'));

// app.get('/api/notes', (req, res) => {
//    let results = notes;
//    console.log(req.query);
//    res.json(results);
// });

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

app.listen(PORT, () => {
   console.log(`API server now on port ${PORT}!`);
});
