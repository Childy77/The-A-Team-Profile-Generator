const inquirer = require("inquirer");
const fs = require("fs");


const questions = [

    // employee info
    {
    type: "input",
    name: "name",
    message: "What is you employees name?"
    },
    {
    type: "input",
    name: "id",
    message: "What is your employees ID number?"
    },
    {
    type: "input",
    name: "name",
    message: "What is your employees email?"
    },

    // manager info
    {
        type: "input",
        name: "name",
        message: "Who is the manager of this project?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your managers ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your managers email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your managers office number?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "school",
        message: "What school did your manager go to"
    },

    // Engineer info

    // Intern info
]