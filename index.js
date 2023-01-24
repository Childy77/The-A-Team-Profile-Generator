const inquirer = require("inquirer");

const fs = require("fs");
const path = require('path');

// const generateHtml = ({ name, id, email, office, github, school }) =>


inquirer
.prompt([

    // employee info
    {
        type: "input",
        name: "name",
        message: "What is your employee name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your employee email?"
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
        name: "office",
        message: "What is your managers office number?"
    },

    // Engineer info

    {
        type: "input",
        name: "name",
        message: "What is the Engineers name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your Engeneers ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Engineers email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the Engineers github username?"
    },

    // Intern info

    {
        type: "input",
        name: "name",
        message: "What is your Interns name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your Interns ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Interns email?"
    },
    {
        type: "input",
        name: "school",
        message: "What school did your Intern go to?"
    },

]);



