//Render Manager
function renderManager(manager) {
  return `<div class="col-sm-3">
   <div id="manager">
       <h2> Manager<h2>
       <ul>
       <li><p id="name"> Name:${managerAnswer.managerName}.</p>
       <li><p id="name"> Role:${manager.getRole()}.</p>
       <li><p id="id">ID:${managerAnswer.managerId}.</p>
       <li><p id="email"> Email:${managerAnswer.managerEmail}.</p>
       <li><p id="phone"> Office Number:${managerAnswer.officeNumber}.</p>

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
       <li><p id="name"> Name:${engineerAnswer.engineerName}.</p>
       <li><p id="name"> Role:${engineer.getRole()}.</p>
       <li><p id="id">ID:${engineerAnswer.engineerId}.</p>
       <li><p id="email"> Email:${engineerAnswer.engineerEmail}.</p>
       <ahref='${engineerAnswer.engineerGithub}'> <li><p id="github"> GitHub:${engineerAnswer.engineerGithub}.</p>
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
      <li><p id="name"> Name:${internAnswer.internName}.</p>
      <li><p id="name"> Role:${intern.getRole()}.</p>
      <li><p id="id">ID:${internAnswer.internId}.</p>
      <li><p id="email"> Email:${internAnswer.internEmail}.</p>
      <li><p id="school"> School:${internAnswer.internSchool}.</p>
      </ul>
  </div>   
</div>`;
}

//Render Employees
function MySquad() {
  const htmlArray = []
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
        <div class="banner-bar'>
          <h1> MY TEAM</h1>
        </div>

    </body>
</html>`;

module.exports = generateHTML;
