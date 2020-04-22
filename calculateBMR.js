const patients = require("./patients");

function calculateBMR(weight, height, ageOfUser, genderOfUser) {
    const heightInCm = height * 100;
  
    let BMR;
  
    if (genderOfUser === "m") {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser + 50;
    } else {
      BMR = 10 * weight + 6.25 * heightInCm - 5 * ageOfUser - 150;
    }
  
    return BMR;
  }

  const bmrs = patients.map(function(patient) {
    //   console.log("WHAT IS PATIENT?", patient);
    
      let BMR = calculateBMR(patient.weight, patient.height, patient.age, patient.gender); // calculate BMI for a patient here
    
      return BMR; // return BMI for a patient here
    });
    
    console.log(bmrs);