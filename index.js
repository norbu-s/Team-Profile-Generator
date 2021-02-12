const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Prompt = require('inquirer/lib/prompts/base');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

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
    ]);
};
const promptEngineer1 = () => {
    return inquirer.prompt([
        {
            type:'input',
            message: "What is the team members name?",
            name: "engineer1Name"
        },
        {
            type:'input',
            message: "What is the team members ID?",
            name: "engineer1Id"
        },
        {
            type: "input",
            message: "What is the team members email?",
            name: "engineer1Email"
        },
        {
            type: "input",
            message: "What is the team members github username?",
            name: "engineer1Github"
        },
    ]);
};
const promptEngineer2 = () => {
    return inquirer.prompt([
        {
            type:'input',
            message: "What is the team members name?",
            name: "engineer2Name"
        },
        {
            type:'input',
            message: "What is the team members ID?",
            name: "engineer2Id"
        },
        {
            type: "input",
            message: "What is the team members email?",
            name: "engineer2Email"
        },
        {
            type: "input",
            message: "What is the team members github username?",
            name: "engineer2Github"
        },
    ]);
};
const promptEngineer3 = () => {
    return inquirer.prompt([
        {
            type:'input',
            message: "What is the team members name?",
            name: "engineer3Name"
        },
        {
            type:'input',
            message: "What is the team members ID?",
            name: "engineer3Id"
        },
        {
            type: "input",
            message: "What is the team members email?",
            name: "engineer3Email"
        },
        {
            type: "input",
            message: "What is the team members github username?",
            name: "engineer3Github"
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
            message: "What is the team members github username?",
            name: "internGithub"
        },
    ]);
};



const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> <link rel="stylesheet" type "text/css" href="/Assets/style.css">
<title>Document</title>
</head>
    <body>
        <h1>My Team<h1>
          <br>
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
                            <div id="engineer2">
                                <h2> Engineer<h2>
                                <ul>
                                <li><p id="name"> Name:${answers.engineer2Name}.</p>
                                <li><p id="id">ID:${answers.engineer2Id}.</p>
                                <li><p id="email"> Email:${answers.engineer2Email}.</p>
                                <li><p id="github"> GitHub:${answers.engineer2Github}.</p>
                                </ul>
                            </div>
                        </div>     
                        <div class="col-sm-3">
                            <div id="engineer3">
                                <h2> Engineer<h2>
                                <ul>
                                <li><p id="name"> Name:${answers.engineer3Name}.</p>
                                <li><p id="id">ID:${answers.engineer3Id}.</p>
                                <li><p id="email"> Email:${answers.engineer2Email}.</p>
                                <li><p id="github"> GitHub:${answers.engineer2Github}.</p>
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
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  

// const init = () => {
//     promptIntern()
//       .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//       prompt("Enter Details for Engineer or Intern")
//       if (res === Engineer) then init(promptEngineer)
//       for(var = i, i > Engineer1, i ++ )
//       if else (red === intern then init(propmtIntern)
//       .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));

//   };


  
  init();