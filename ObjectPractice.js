const patients = require("./patients");
const firstPatient = patients[0];

// 1.
const { age, weight, height } = firstPatient;

console.log(age, weight, height);

// 2.
// const fullName = firstPatient.firstName + firstPatient.lastName;
const { firstName, lastName } = firstPatient;

const fullName = `${firstName} ${lastName}`;

console.log(fullName);

// 3.
if (firstPatient.dailyExercise === "no") {
    console.log("does not exercise")
} else {
    console.log("this patient exercises")
}

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height
// 2. declare a variable fullName and assign it to the firstName and lastName of the firstPatient
// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"