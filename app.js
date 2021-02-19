const inquirer = require(`inquirer`);
const fs = require(`fs`);
const util = require("util");
const path = require("path");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const employees = [[],[],[]];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Manager's name?",
        name:"managerName",
      },
      {
        type: "input",
        message: "What is the Manager's ID?",
        name:"managerId",
      },
      {
        type: "input",
        message: "What is the Manager's email?",
        name:"managerEmail",
      },
      {
        type: "input",
        message: "What is the Manager's office number?",
        name:"officeNumber",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.managerName,
        answer.managerId,
        answer.managerEmail,
        answer.officeNumber
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
        message: "What is the Engineer's name?",
        name:"engineerName",
      },
      {
        type: "input",
        message: "What is the Engineer's ID?",
        name:"engineerId",
      },
      {
        type: "input",
        message: "What is the Engineer's email?",
        name:"engineerEmail",
      },
      {
        type: "input",
        message: "What is the Engineer's github username?",
        name:"engineerGithub",
      },
    ])
    .then((answer) => {
      engineeranswer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.engineerGithub
      );
      employees.push(engineeranswer);
      promptMain();
    });
};

const promptIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name:"internName",
      },
      {
        type: "input",
        message: "What is the Intern's ID?",
        name:"internId",
      },
      {
        type: "input",
        message: "What is the Intern's email?",
        name:"internEmail",
      },
      {
        type: "input",
        message: "What school is the Intern from?",
        name:"internSchool",
      },
    ])
    .then((answer) => {
      internAnswer = new Intern(
        answer.internName,
        answer.internId,
        answer.internEmail,
        answer.internSchool
      );
      employees.push(internanswer);
      promptMain();
    });
};

const promptMain = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Add a team member .",
        name: "newUser",
        choices: ["Engineer", "Intern", "NO"],
      },
    ])
    .then((answer) => {
      if (answer.newUser === "Engineer") {
        promptEngineer();
      }
      if (answer.newUser === "Intern") {
        promptIntern();
      }
      if (answer.newUser === "NO") {
        writeFileAsync("./dist/index.html", renderHTML(employees))
      }
    });
};

function renderHTML(answer) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> 
      <link rel="stylesheet" type "text/css" href="./CSS/style.css">
      <title>My Team</title>
  </head>
      <body>
          <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="col-sm-3">
     <div id="manager">
         <h2> Manager<h2>
         <ul>
         <li><p id="name"> Name:${answer.managerName}.</p>
         <li><p id="name"> Role:Manager.</p>
         <li><p id="id">ID:${answer.managerId}.</p>
         <li><p id="email"> Email:${answer.managerEmail}.</p>
         <li><p id="phone"> Office Number:${answer.officeNumber}.</p>
         </ul>
     </div>   
  </div>
  <div class="col-sm-3">
      <div id="engineer">
          <h2> Engineer<h2>
          <ul>
          <li><p id="name"> Name:${answer.engineerName}.</p>
          <li><p id="role"> Role:Engineer.</p>
          <li><p id="id">ID:${answer.engineerId}.</p>
          <li><p id="email"> Email:${answer.engineerEmail}.</p>
          <li><p id="github"> GitHub:${answer.engineerGithub}.</p>
          </ul>
      </div>  
   </div>
   <div class="col-sm-3">
      <div id="engineer">
          <h2> Engineer<h2>
          <ul>
          <li><p id="name"> Name:${answer.engineerName}.</p>
          <li><p id="role"> Role:Intern.</p>
          <li><p id="id">ID:${answer.engineerId}.</p>
          <li><p id="email"> Email:${answer.engineerEmail}.</p>
          <li><p id="github"> GitHub:${answer.engineerGithub}.</p>
          </ul>
      </div>  
   </div>
      </body>
  </html>`;
  }

const init = () => {
  promptManager()
    .then((answer) =>
      writeFileAsync("./dist/index.html", renderHTML(employees))
    )
    .then(() => console.log("New HTML file successfully generated!"))
    .catch((err) => console.log("Error, no files were generated.", err));
};

promptManager();
