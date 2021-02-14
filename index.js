const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Prompt = require('inquirer/lib/prompts/base');
const chalk = require('chalk');
const generateMarkdown = require('./dist/generateMarkdown.js');
const jest = require ('jest');
const Manager = require ('./lib/Manager');
const Intern = require ('./lib/Intern.js');
const Engineer = require ('./lib/Engineer.js');



// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt for Employee
// const promptEmployee = () => {
//     return inquirer.prompt([
//         {
//             type:'input',
//             message: "What is the team members name?",
//             name: "employeeName"
//         },
//         {
//             type:'input',
//             message: "What is the team members ID?",
//             name: "empoyeeId"
//         },
//         {
//             type: "input",
//             message: "What is the team members email?",
//             name: "employeeEmail"
//         },
//         {
//             type: "input",
//             message: "What is the team members role?",
//             name: "employeeRole"
//         },
//     ]);
// };

//Prompt for Manager
const promptManager = () => {
    return inquirer.prompt([
        {
            type:'input',
            message: "What is the team members name?",
            name: "managerName"
        },
        {
            type:'input',
            message: "What is the team members ID?",
            name: "managerId"
        },
        {
            type: "input",
            message: "What is the team members email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "What is the office number?",
            name: "managerPhone"
        },
        {
            type: "list",
            message: "Please select a team member to add.",
            name: "newUser ",
            choices: [
                "Engineer",
                "Intern",
                "Finish building my team"
            ]
        },
    ]);
};

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Please select a team member to add.",
            name: "newUser ",
            choices: [
                "Engineer",
                "Intern",
                "Finish building my team"
            ]
        },
    ]);
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type:'input',
            message: "What is the team members name?",
            name: "engineerName"
        },
        {
            type:'input',
            message: "What is the team members ID?",
            name: "engineerId"
        },
        {
            type: "input",
            message: "What is the team members email?",
            name: "engineerEmail"
        },
        {
            type: "input",
            message: "What is the team members github username?",
            name: "engineerGithub"
        },
        {
            type: "list",
            message: "Please select a team member to add.",
            name: "newUser ",
            choices: [
                "Engineer",
                "Intern",
                "Finish building my team"
            ]
        },
    ]);
};
const promptIntern = () => {
    return inquirer.prompt([
        {
            type:'input',
            message: "What is the team members name?",
            name: "internName"
        },
        {
            type:'input',
            message: "What is the team members ID?",
            name: "internId"
        },
        {
            type: "input",
            message: "What is the team members email?",
            name: "internEmail"
        },
        {
            type: "input",
            message: "What school is the Intern from?",
            name: "school"
        },
        {
            type: "list",
            message: "Please select a team member to add.",
            name: "newUser ",
            choices: [
                "Engineer",
                "Intern",
                "Finish building my team"
            ]
        },
    ]);
};



const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> 
<link rel="stylesheet" type "text/css" href="/Assets/style.css">
<title>Document</title>
</head>
    <body>
        <div class="topnav" style="backgroung-color:white;height="100px;">
            <h1 style="color:blue; text-align: center;"> My Team</h1>
        </div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <div id="manager">
                                <h2> Manager<h2>
                                <ul>
                                <li><p id="name"> Name:${answers.managerName}.</p>
                                <li><p id="id">ID:${answers.managerId}.</p>
                                <li><p id="email"> Email:${answers.managerEmail}.</p>
                                <li><p id="phone"> Office Number:${answers.managerPhone}.</p>
                                </ul>
                            </div>   
                        </div>     
                        <div class="col-sm-3">
                            <div id="engineer1">
                                <h2> Engineer<h2>
                                <ul>
                                <li><p id="name"> Name:${answers.engineer1Name}.</p>
                                <li><p id="id">ID:${answers.engineer1Id}.</p>
                                <li><p id="email"> Email:${answers.engineer1Email}.</p>
                                <li><p id="github"> GitHub:${answers.engineer1Github}.</p>
                                </ul>
                            </div>  
                        </div>      
                        <div class="col-sm-3">
                            <div id="intern">
                                <h2> Intern<h2>
                                <ul>
                                <li><p id="name"> Name:${answers.internName}.</p>
                                <li><p id="id">ID:${answers.internId}.</p>
                                <li><p id="email"> Email:${answers.internEmail}.</p>
                                <li><p id="github"> GitHub:${answers.internGithub}.</p>
                                </ul>
                            </div>   
                        </div>    
                    </div> 
            </div>
    </body>
</html>`;

const init = () => {
    promptManager()
    .then((answers) => writeFileAsync('./dist/index.html', generateMarkdown(answers)))
    .then(() => console.log('New HTML file successfully generated!'))
    .catch((err) => console.log('Error, no files were generated.', err));
}

init();