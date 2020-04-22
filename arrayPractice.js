// arrayPractice.js
const patients = require("./patients");

// accesing elements in an array
const firstPatient = patients[1];

console.log(firstPatient);

// which element to access can also be dependent on a variable
const whichElementOfArray = 1;
const tenthPatient = patients[whichElementOfArray];
// const tenthPatient = patients[9];

// last element of array
const lastElementOfArray = patients[patients.length - 1];

console.log(lastElementOfArray);

// DIY

// - console.log the second patient from the array
// - console.log the last patient from the array