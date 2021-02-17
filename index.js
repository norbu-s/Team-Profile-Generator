const inquirer = require(`inquirer`);
const fs = require(`fs`);
const util = require("util");
const Prompt = require("inquirer/lib/prompts/base");
const chalk = require("chalk");
const generateMarkdown = require("./src/generateMarkdown.js");
const jest = require("jest");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

let manager;

const employees = [];

const promptManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team members name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the team members ID?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is the team members email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the office number?",
        name: "officeNumber",
      },
    ])
    .then((managerAnswer) => {
      manager = new Manager(
        managerAnswer.managerName,
        managerAnswer.managerId,
        managerAnswer.managerEmail,
        managerAnswer.officeNumber
      );
      employees.push(manager);
      promptMain();
    });
};

const promptEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team members name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the team members ID?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is the team members email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the team members github username?",
        name: "engineerGithub",
      },
    ])
    .then((engineerAnswer) => {
      const newEngineer = new Engineer(
        engineerAnswer.engineerName,
        engineerAnswer.engineerId,
        engineerAnswer.engineerEmail,
        engineerAnswer.engineerGithub
      );
      employees.push(newEngineer);
      promptMain();
    });
};

function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team members name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is the team members ID?",
        name: "internId",
      },
      {
        type: "input",
        message: "What is the team members email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What school is the Intern from?",
        name: "internSchool",
      },
    ])
    .then((internAnswer) => {
      const newIntern = new Intern(
        internAnswer.internName,
        internAnswer.internId,
        internAnswer.internEmail,
        internAnswer.internSchool
      );
      employees.push(newIntern);
      promptMain();
    });
}

function promptMain() {
  console.log(employees);
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select a team member to add.",
        name: "newUser",
        choices: ["Engineer", "Intern", "Finish building my team"],
      },
    ])
    .then((mainAnswer) => {
      if (mainAnswer.newUser === "Engineer") {
        promptEngineer();
      }
      if (mainAnswer.newUser === "Intern") {
        promptIntern();
      }
      if (mainAnswer.newUser === "Finish building my team") {
        //for loop to pass  generateMarkdown//
        generateMarkdown();
      }
    });
}

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> 
<link rel="stylesheet" type "text/css" href="./CSS/style.css">
<title>My Team</title>
</head>
    <body>
        <div class="topnav" style="background-color:white;height:100px;">
            <h1 style="text-align: center;"> My Team </h1>
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
                            <div id="engineer">
                                <h2> Engineer<h2>
                                <ul>
                                <li><p id="name"> Name:${answers.engineerName}.</p>
                                <li><p id="id">ID:${answers.engineerId}.</p>
                                <li><p id="email"> Email:${answers.engineerEmail}.</p>
                                <li><p id="github"> GitHub:${answers.engineerGithub}.</p>
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
                                <li><p id="school"> School:${answers.internSchool}.</p>
                                </ul>
                            </div>   
                        </div>    
                    </div> 
            </div>
    </body>
</html>`;

const init = () => {
  promptManager();
      .then((answers) =>
        writeFileAsync("dist/index.html", generateMarkdown(answers))
      )
      .then(() => console.log("New HTML file successfully generated!"))
      .catch((err) => console.log("Error, no files were generated.", err));
};

// init();

promptManager();
