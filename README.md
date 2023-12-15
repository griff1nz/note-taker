# Note Taker

## Description
- I created this program to help users easily organize their to-do lists in a simple list.
- This program runs on express.js, using get, post, and delete requests.

## Installation
N/A

## Usage
Upon connecting to the webpage, the user will be presented with a button that, when clicked, will send them to the /notes path where they can type their notes. The user can click on the right side of the screen to type a new note, then click one of the two buttons in the navbar to either save their note to the database or clear the fields. From there, they can click on the created notes on the left side of the screen to view them, or click a delete button to remove that note.
![Screenshot of Webpage](<./public/assets/note.png>)

## Credits 
- Explanation of findIndex() method: https://stackoverflow.com/questions/65015000/how-do-i-use-express-js-app-delete-to-remove-a-specific-object-from-an-array
- ./helpers/uuid.js copied from classwork

## License
Please refer to the LICENSE in the repo.

## Source Code Locations
- server.js: ./server.js  
- db.json: ./db/db.json  
- uuid.js: ./helpers/uuid.js  
- index.html: ./public/index.html  
- notes.html: ./public/notes.html  
- styles.css: ./public/assets/css/styles.css  
- index.js: ./public/assets/js/index.js  

## Deployed Webpage 
https://zion-note-taker-aedc66c4768d.herokuapp.com/