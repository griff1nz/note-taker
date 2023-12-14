
const express = require('express');
const path = require('path');
const fs = require("fs");
const notes = require('./db/db.json');
const uuid = require('./helpers/uuid');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send("Navigate to /notes to get started.")
);
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('/api/notes', (req, res) => 
    res.status(200).json(notes)
);
app.post('/api/notes', (req, res) =>
{
    // Log that a POST request was received
    console.info(`${req.method} request received to add a note`);
  
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        id: uuid()
      };
      notes.push(newNote);
      notesForJson = JSON.stringify(notes);
      fs.writeFile('./db/db.json', notesForJson, (err) =>
      err
        ? console.error(err)
        : console.log(
            `Note has been added!`
          )
    );
      const response = {
        status: 'success',
        body: newNote,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting note');
    }
  });
  app.delete('/api/notes/:id', (req, res) =>{
    res.send("Delete request called")
    const itemIndex = notes.findIndex(({ id }) => id === req.params.id); 
    notes.splice(itemIndex, 1);//https://stackoverflow.com/questions/65015000/how-do-i-use-express-js-app-delete-to-remove-a-specific-object-from-an-array
    const result = JSON.stringify(notes);

    fs.writeFile('./db/db.json', result, (err) =>
      err
        ? console.error(err)
        : console.log(
            `Note has been removed!`
          )
    );
      });
app.listen(PORT, () => 
    console.log("Listening at port 3001")
);