const patients = require("./patients");
const height = process.argv[2];

const patientsByHeight = patients.filter(function(patient) {
    return patient.height > height;
});

if (patientsByHeight.length === 0) {
    console.log(`There are no patients taller  than ${height}.`)
} else {
console.log("OUTPUT:", patientsByHeight);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS TALLER THAN ${height}:`, patientsByHeight.length);   
}