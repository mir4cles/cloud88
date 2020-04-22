const patients = require("./patients");

const phoneNumber = process.argv[2];

// console.log(patients);

let specificPatient = patients.find(function(patient) {
    return phoneNumber === patient.phoneNumber;
}); // your logic here

if (specificPatient !== undefined) {
    console.log(specificPatient);
} else {
    console.log(`Patient with phone number: ${phoneNumber} is not found in database`)
}