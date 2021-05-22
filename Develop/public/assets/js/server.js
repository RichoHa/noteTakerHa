// Dependencies
const express = require('express')
const app = express();
const path = require('path');
const fs = require('fs');
var uniqid = require('uniqid');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// Serving static files from the directory public - the CSS and JavaScript files
app.use(express.static("../../../public"));


var port = process.env.PORT || 8080;


// Serving static files from the directory public - the CSS and JavaScript files
// app.use(express.static("../../public"));

//Fetch information from JSON file using FS.
//Convert retrieved code to an Object using Json.
//noteTakerHa\Develop\db\db.json
let dataRaw = fs.readFileSync(`../../../db/db.json`);
data = JSON.parse(dataRaw);
//Return the object when requesting api/notes
app.get("/api/notes", (req, res) => {
    res.json(data)
})

//Return html when request /ntoes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../notes.html'));
});

//Return index.html when request *
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
});

//Put id into new notes obtained
//push object into db.json
//
app.post('/api/notes', (request, response) => {
    var newObject = Object.assign({ id: uniqid() }, request.body);
    data.push(newObject);
    fs.writeFileSync(`../../../db/db.json`, JSON.stringify(data))
    response.status(200).send('The note was successfully added.');
})

app.delete('/api/notes/:id', (request, response) => {
    const idToDelete = request.params.id;
    // The filter() method assigns the content that doesn't have the id of the idOfNote to the database variable
    // The note with the idOfNote is removed
    data = data.filter(info => info.id !== idToDelete);
    fs.writeFileSync(`../../../db/db.json`, JSON.stringify(data))
    response.send('The note was successfully deleted.');
})

app.listen(port);
console.log('Magic happens on port ' + port);