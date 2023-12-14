// Immediately export a function that generates a string of random numbers and letters
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
//Definitely not shamelessly copied from one of the lessons
// id allows the program to easily find the notes to filter