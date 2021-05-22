//1-Need to include FS library
const fs = require('fs');

//1-Retrieved information from a source, currently using example.
const todo3 = { "noteTitle": "To Do on Wednesday", "noteDetail": "Sleeeep" }

//1-Fetch information from JSON file using FS.
//2-Convert retrieved code to an Object using Json.
let dataRaw = fs.readFileSync(`db.json`);
data = JSON.parse(dataRaw);

//3-Appending information into object.
data.push(todo3);

//4-User input for what to be deleted.
//5-find index of the input within the array.
//6-Remove from the array using the Index.
const deleteThisItem = "To Do on Monday"
const index = data.findIndex(x => x.noteTitle === deleteThisItem);
if (index > -1) {
    data.splice(index, 1);
}

//7-Write information back into Json
fs.writeFileSync(`db.json`, JSON.stringify(data))

//1-Show what is stored in data is a readable format.
console.log(`Data is ${JSON.stringify(data)}`)