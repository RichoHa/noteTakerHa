//Need to include FS library
const fs = require('fs');
var uniqid = require('uniqid');

//Retrieved information from a source, currently using example.
//Add id to the front of the object retreived.
var todo3 = { "noteTitle": "To Do on Example", "noteDetail": "Example" }
todo3 = Object.assign({ id: uniqid() }, todo3);
console.log(uniqid())
console.log(todo3)

//Fetch information from JSON file using FS.
//Convert retrieved code to an Object using Json.
let dataRaw = fs.readFileSync(`db.json`);
data = JSON.parse(dataRaw);

//Appending information into object.
data.push(todo3);

//User input for what to be deleted, this case using the ID.
//find index of the input within the array.
//Remove from the array using the Index.
const deleteThisItemWithID = "XXXXXXXXXXXXXXXXX"
const index = data.findIndex(x => x.id === deleteThisItemWithID);
if (index > -1) {
    data.splice(index, 1);
}

//Write information back into Json
fs.writeFileSync(`db.json`, JSON.stringify(data))

//Show what is stored in data is a readable format.
console.log(`Data is ${JSON.stringify(data)}`)