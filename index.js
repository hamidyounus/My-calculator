#! /usr/bin/env node
import inquirer from "inquirer";
// printing a Welcome Message
console.log("\n\tWellcome to \'Codewithimran\' CLI Simple Calculator");
// Asking question from through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter first Number ", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select One Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multipication", "Division"],
    },
]);
// Condiional statment if Else
if (answers.operator === "Addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multipication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Input");
}
