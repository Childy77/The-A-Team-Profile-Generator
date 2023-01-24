const inquirer = require("inquirer");

const fs = require("fs");
const path = require('path');
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/engineer");
const genHtml = require("./src/genHTML");


const employees = [];

// const generateHtml = ({ name, id, email, office, github, school }) =>

function init() {


inquirer
.prompt([


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
   

])
.then((answers) => {
    // run answers through manager constructor and move it to global array
    const emp = new Manager(answers.name, answers.id, answers.email, answers.office);
    employees.push(emp);
    question();
})


}

function menu() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Do you want to create a new employee?",
            choices: ["yes", "no"]

        }
    ]) 
    .then((answer) => {
        if (answer.choice === "yes") {
            //run function to ask question
            question()
            
        }
        else {
            //run function to create html

            const html = genHtml(employees)
            fs.promises.writeFile("dist/index.html", html)
        }
    })
}

function question() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What is the role of your employee?",
            choices: ["intern", "engineer"]
        },

        {
            type: "input",
            name: "name",
            message: "What is your employees name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your employees ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your employees email?"
        },

        {
            type: "input",
            name: "school",
            message: "What school did your Intern go to?",
            when:(answers) => answers.role === "intern"
        },

        {
            type: "input",
            name: "github",
            message: "What is the Engineers github username?",
            when:(answers) => answers.role === "engineer"
        },
    ])
    .then((answers) => {
        if (answers.role === "intern") {
            // run answers through intern constructor
            const int = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(int);
            
        }
        else {
            // run answers through engineer constructor
            const eng = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(eng);
            

        }
        // move created employee to global array
        menu();
    })
}
init();

