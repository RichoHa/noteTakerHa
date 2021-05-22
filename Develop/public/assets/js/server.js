// Dependencies
const express = require('express')
const port = 3000
const app = express();
const path = require('path');

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
});


//Set up server to listen on the provided port number.
app.listen(port, () => console.log(`App listening on PORT ${port}`));

