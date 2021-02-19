const inquirer = require(`inquirer`);
const fs = require(`fs`);
const util = require("util");
const path = require('path');
const generateMarkdown = require("./src/generateMarkdown");
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
        // when: (answer) => answer.content.includes(managerName)
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
        // when: (answer) => answer.content.includes(managerEmail)
      },
      {
        type: "input",
        message: "What is the office number?",
        name: "officeNumber",
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
        message: "What is the team members name?",
        name: "engineerName",
        // when: (answer) => answer.content.includes(engineerName)
      },
      {
        type: "input",
        message: "What is the team members ID?",
        name: "engineerId",
        // validate: function (num) {
        //   numbers = /^[0-9]+$/.test(num);
        //   if (numbers) {
        //     log.blue(`        ----------Id accepted----------`);
        //     return true;
        //   } else {
        //     log.red(
        //       `        ----------Please enter a number for ID (No letters or symbols)----------`
        //     );
        //     return false;
        //   }
        },
      {
        type: "input",
        message: "What is the team members email?",
        name: "engineerEmail",
        // when: (answer) => answer.content.includes(engineerEmail)
      },
      {
        type: "input",
        message: "What is the team members github username?",
        name: "engineerGithub",
        // when: (answer) => answer.content.includes(engineerGithub)
      },
    ])
    .then((answer) => {
      engineeranswer = new Engineer(
        answer.engineerName,
        answer.engineerId,
        answer.engineerEmail,
        answer.engineerGithub
      );
      employees[1].push(engineeranswer);
      promptMain();
    });
};

// console.log(engineer)

const promptIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team members name?",
        name: "internName",
        // when: (answer) => answer.content.includes(internName)
      },
      {
        type: "input",
        message: "What is the team members ID?",
        name: "internId",

        validate: function (num) {
          numbers = /^[0-9]+$/.test(num);
          if (numbers) {
            console.log.blue(`----------Id accepted----------`);
            return true;
          } else {
            console.log.red(
              `----------Please enter a number for ID (No letters or symbols)----------`
            );
            return false;
          }
        },
      },
      {
        type: "input",
        message: "What is the team members email?",
        name: "internEmail",
        // when: (answer) => answer.content.includes(internEmail)
      },
      {
        type: "input",
        message: "What school is the Intern from?",
        name: "internSchool",
        // when: (answer) => answer.content.includes(internSchool)
      },
    ])
    .then((answer) => {
      internanswer = new Intern(
        answer.internName,
        answer.internId,
        answer.internEmail,
        answer.internSchool
      );
      employees[2].push(internanswer);
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
        generateMarkdown();
      }
    });
};

// var manager = [];
// for (var i=0; i<1; i++) {
//     manager[i] = {
//         name: "name" + i+1,
//         id: "age" + i+1,
//         email: "hometown" + i+1
//     };
// }
// console.log(title);

// const generateMarkdown = (answers) =>
//   //  when: (answers) => ${answers.description}
//   `<!DOCTYPE html>
//   <html lang="en">
//   <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <link rel="stylesheet" type "text/css" href="./CSS/style.css">
//   <title>My Team</title>
//   </head>
//       <body>
//           <div class="banner-bar'>
//           <h1> MY TEAM</h1>
//           </div>
//           ${RenderEmployees(manager,engineer,intern)};
// </body>
// </html>`;

//init();

promptManager();
