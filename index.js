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
        name:"engineerName",
      },
      {
        type: "input",
        message: "What is the team members ID?",
        name:"engineerId",
      },
      {
        type: "input",
        message: "What is the team members email?",
        name:"engineerEmail",
      },
      {
        type: "input",
        message: "What is the team members github username?",
        name:"engineerGithub",
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
        name:"internName",
      },
      {
        type: "input",
        message: "What is the team members ID?",
        name:"internId",
      },
      {
        type: "input",
        message: "What is the team members email?",
        name:"internEmail",
      },
      {
        type: "input",
        message: "What school is the Intern from?",
        name:"internSchool",
      },
    ])
    .then((internAnswer) => {
      const newIntern = new Intern(
        internAnswer.internName,
        internAnswer.internId,
        internAnswer.internEmail,
        internAnswer.internSchool,
      );
      employees.push(newIntern);
      promptMain();
    });
}

function promptMain() {
  //   console.log(employees);
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
        generateMarkdown();
      }
    });
}



const init = () => {
  promptManager()
    .then((answers) => writeFileAsync("dist/index.html", generateHTML(answers)))
    .then(() => console.log("New HTML file successfully generated!"))
    .catch((err) => console.log("Error, no files were generated.", err));
};

// init();

promptManager();
