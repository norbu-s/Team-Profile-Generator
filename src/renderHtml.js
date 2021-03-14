const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern.js");
const Engineer = require("../lib/Engineer.js");
const app = require('../app.js');



const renderHTML = (employees) => {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="dist/CSS/style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
    `;
    const managers = employees.filter(
      (employee) => employee.getRole() === 'Manager'
    );
    const engineers = employees.filter(
      (employee) => employee.getRole() === 'Engineer'
    );
    const interns = employees.filter(
      (employee) => employee.getRole() === 'Intern'
    );
    managers.forEach(manager => {
      html += `<div class="managerRow" col-4 d-flex justify-content-center><h2>Name: ${manager.getName()}</h2><h3>Role: ${manager.getRole()}</h3><h3>Email: ${manager.getEmail()}</h3><h3>Phone Number: ${manager.getOfficeNumber()}</h3></div>`;
    });
    engineers.forEach(engineer => {
      html += `<div class="enginnerRow" col-4 d-flex justify-content-center><h2>Name: ${engineer.getName()}</h2><h3>Role: ${engineer.getRole()}</h3><h3>Eail: ${engineer.getEmail()}</h3><h3>Github: ${engineer.getGithubUsername()}</h3></div>`;
    });
    interns.forEach(intern => {
      html += `<div class="internRow "col-4 d-flex justify-content-center><h2>Name: ${intern.getName()}</h2><h3>Role: ${intern.getRole()}</h3><h3>Role: ${intern.getEmail()}</h3><h3>School: ${intern.getSchool()}</h3></div>`;
    });
    `
    </div>
    </div>
  </div>
  </body>
  </html>
  `;
    return html
  };

 module.exports = renderHTML;