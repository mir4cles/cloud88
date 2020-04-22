const patients = require("./patients");

// declare function
function displayFullName(patient) {
  // HERE IS HOW TO CHECK YOURSELF
// console.log('CHECK TO SEE WHAT IS PATIENT:', patient)
  const { firstName, lastName } = patient;

  const fullName = `${firstName} ${lastName}`;

  console.log(fullName);
}

// pass as callback
patients.forEach(displayFullName);

// pass anonymous function directly
patients.forEach(function(patient) {
  // HERE IS HOW TO CHECK YOURSELF
  // console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
  const { firstName, age } = patient;

  console.log(`${firstName} - age: ${age}`);
});

// DIY's
// - for each patient log their weight

patients.forEach(function(patient) {

    const { weight } = patient;

    console.log(`weight: ${weight}`);
});
// - for each patient, log their last name and gender

patients.forEach(function(patient) {
    const { lastName, gender } = patient;
    console.log(`${lastName}'s gender: ${gender}`)
});

// - for each patient,
//      - if they are of gender 'm' console.log Mr. and their lastName

patients.forEach(function(patient) {
    
    const { lastName, gender } = patient;

    if (gender === "m") {
        console.log(`Mr. ${lastName}`)
    }
});
//      - if they are of gender 'f' console.log Mrs. and their lastName

// patients.forEach(function(patient) {
    
//     const { lastName, gender } = patient;

//     if (gender === "f") {
//         console.log(`Mrs. ${lastName}`)
//     }
// });

// OR

patients.forEach(function(patient) {
    
    const { lastName, gender } = patient;

    const prefix = gender === "m" ? "Mr." : "Mrs.";
    
    console.log(`${prefix} ${lastName}`);
});