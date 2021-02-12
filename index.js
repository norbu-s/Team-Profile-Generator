const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            message: "What is the team members ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the team members email?",
            name: "description"
        },
        {
            type: "input",
            message: "How do you install your project?",
            name: "installation"
        },
        {
            type: "input",
            message: "What are the Usage?",
            name: "usage"
        },
        {
            type: "input",
            message: "Contributing?",
            name: "contributing"
        },

        {
            type: "input",
            message: "How do you test this Application?",
            name: "tests"
        },
        {
            type: "list",
            message: "Please select a type of license.",
            name: "license",
            choices: [
                "MIT",
                "Apache",
                "ISC",
                "GNU GPLv3"
            ]
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "questions"
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
<link rel="stylesheet" href="Assets/style.css">
<title>Document</title>
</head>
    <body>
        <h1 class="display-4">My Team</h1>
        <br>
             <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <ul>
                    <li><p id="manager"> <strong>Manager:</strong><br>${answers.description}.</p>
                    <li><p id="engineer1"> <strong>Engineer:</strong> <br>${answers.installation}.</p>
                    <li><p id="engineer2"> <strong>Engineer:</strong> <br>${answers.usage}.</p>
                    <li><p id="engineer3"> <strong>Engineer:</strong> <br>${answers.contributing}.</p>
                    <li><p id="intern"> <strong>Intern:</strong> <br>${answers.tests}.</p>
                    </ul>
                </div>
            </div>
    </body>
</html>`;

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();