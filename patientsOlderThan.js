const patients = require("./patients");
// hardcoding age 65 for now, we can make this dynamic later
const age = 165;

const patientsOlderThan = patients.filter(function(patient) {
    return patient.age > age;
});

if (patientsOlderThan.length === 0) {
    console.log(`There are not patients older than: ${age} in the database`)
} else {
    console.log("OUTPUT:", patientsOlderThan);
    console.log("TOTAL NUMBER OF PATIENTS", patients.length);
    console.log(`NUMBER OF PATIENTS OLDER THAN ${age}:`, patientsOlderThan.length);
}