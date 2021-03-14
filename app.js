const inquirer = require(`inquirer`);
const fs = require(`fs`);
const util = require("util");
const path = require("path");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const renderHTML = require("./src/renderHtml.js");

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const employees = [];

const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Manager's name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the Manager's ID?",
        name: "managerId",
      },
      {
        type: "input",
        message: "What is the Manager's email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the Manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((answer) => {
      managerAnswer = new Manager(
        answer.managerName,
        answer.managerId,
        answer.managerEmail,
        answer.officeNumber
      );
      employees.push(managerAnswer);
      promptMain();
    });
};

const promptEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineer's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the Engineer's ID?",
        name: "engineerId",
      },
      {
        type: "input",
        message: "What is the Engineer's email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the Engineer's github username?",
        name: "engineerGithub",
      },
    ])
    .then((answer) => {
      engineerAnswer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.engineerGithub
      );
      employees.push(engineerAnswer);
      promptMain();
    });
};

const promptIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is the Intern's ID?",
        name: "internId",
      },
      {
        type: "input",
        message: "What is the Intern's email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What school is the Intern from?",
        name: "internSchool",
      },
    ])
    .then((answer) => {
      internAnswer = new Intern(
        answer.internName,
        answer.internId,
        answer.internEmail,
        answer.internSchool
      );
      employees.push(internAnswer);
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
        writeFileAsync("./dist/index.html", renderHTML(employees));
      }
    });
};

const init = () => {
  promptManager()
    .then((answer) =>
      writeFileAsync("./dist/index.html", renderHTML(employees))
    )
    .then(() => console.log("New HTML file successfully generated!"))
    .catch((err) => console.log("Error, no files were generated.", err));
};

promptManager();
