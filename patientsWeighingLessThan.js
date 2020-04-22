// patientsWeighingLessThan.js
const patients = require("./patients");
const weight = process.argv[2];

const patientsWeighingLessThan = patients.filter(function(patient) {
    return patient.weight < weight;
}); // your logic here using filter

if (patientsWeighingLessThan.length === 0) {
    console.log(`There are no patients weighing less than ${weight}.`)
} else {
console.log("OUTPUT:", patientsWeighingLessThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS WEIGHING LESS THAN ${weight}:`, patientsWeighingLessThan.length);   
}