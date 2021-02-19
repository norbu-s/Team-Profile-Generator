const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");



//Render Manager
function renderManager(manager) {
  return `<div class="col-sm-3">
   <div id="manager">
       <h2> Manager<h2>
       <ul>
       <li><p id="name"> Name:${answers.managerName}.</p>
       <li><p id="name"> Role:${answers.getRole()}.</p>
       <li><p id="id">ID:${answers.managerId}.</p>
       <li><p id="email"> Email:${answers.managerEmail}.</p>
       <li><p id="phone"> Office Number:${answers.officeNumber}.</p>
       </ul>
   </div>   
</div>`;
}

//Render Engineer
function renderEngineer(engineer) {
  return `<div class="col-sm-3">
   <div id="engineer">
       <h2> Engineer<h2>
       <ul>
       <li><p id="name"> Name:${answers.engineerName}.</p>
       <li><p id="role"> Role:${answers.getRole()}.</p>
       <li><p id="id">ID:${answers.engineerId}.</p>
       <li><p id="email"> Email:${answers.engineerEmail}.</p>
       <ahref='<li><p id="github"> GitHub:${answers.engineerGithub}'>.</p>
       </ul>
   </div>  
</div>   `;
}

//Render Intern
function renderIntern(intern) {
  return `<div class="col-sm-3">
  <div id="intern">
      <h2> Intern<h2>
      <ul>
      <li><p id="name"> Name:${answers.internName}.</p>
      <li><p id="name"> Role:${answers.getRole()}.</p>
      <li><p id="id">ID:${answers.internId}.</p>
      <li><p id="email"> Email:${answers.internEmail}.</p>
      <li><p id="school"> School:${answers.internSchool}.</p>
      </ul>
  </div>   
</div>`;
}

function renderEmployees() {
  let page = '';
  var manager = [];
  for (var i = 0; i < [0]; i++) {
    page + renderManager(manager);
  }
  for (var i = 0; i < [0]; i++) {
    page + renderEngineer(engineer);
  }
  for (var i = 0; i < [0]; i++) {
    page + renderEngineer(intern);
  }
  return page
}


//Render Employees
function generateMarkdown(answers) {
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
        <div class="banner-bar'>
          <h1> MY TEAM</h1>
        </div>
 ${renderEmployees()};
    </body>
</html>`;
}

module.exports = generateMarkdown;
