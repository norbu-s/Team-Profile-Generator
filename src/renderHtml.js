// const Manager = require("../lib/Manager");
// const Intern = require("../lib/Intern.js");
// const Engineer = require("../lib/Engineer.js");
// const app = require('app.js');

// //function to render teams
// // function renderTeam(list) {
// //     let page = "";
// //     for (var i = 0; i < list[0].length; i++) {
// //         page += renderManager(list[0][i]);
// //     }

// //     for (var i = 0; i < list[1].length; i++) {
// //         page += renderEngineer(list[1][i]);
// //     }

// //     for (var i = 0; i < list[2].length; i++) {
// //         page += renderIntern(list[2][i]);
// //     }
// //     return page;
// // }

// // //function to render manager
// // function renderManager(manager) {
// // return `{ <div class="col-sm-3">
// //    <div id="manager">
// //        <h2> Manager<h2>
// //        <ul>
// //        <li><p id="name"> Name:${answers.managerName}.</p>
// //        <li><p id="name"> Role:${answers.getRole()}.</p>
// //        <li><p id="id">ID:${answers.managerId}.</p>
// //        <li><p id="email"> Email:${answers.managerEmail}.</p>
// //        <li><p id="phone"> Office Number:${answers.officeNumber}.</p>
// //        </ul>
// //    </div>   
// // </div>`;
// // }
// // //functioon to render engineer
// // function renderEngineer(engineer) {
// // return `<div class="col-sm-3">
// //     <div id="engineer">
// //         <h2> Engineer<h2>
// //         <ul>
// //         <li><p id="name"> Name:${answers.engineerName}.</p>
// //         <li><p id="role"> Role:${answers.getRole()}.</p>
// //         <li><p id="id">ID:${answers.engineerId}.</p>
// //         <li><p id="email"> Email:${answers.engineerEmail}.</p>
// //         <li><p id="github"> GitHub:${answers.engineerGithub}.</p>
// //         </ul>
// //     </div>  
// //  </div>`;
// // }
// // //fucntion to render intern
// //  function renderInter(intern) {
// //  return `<div class="col-sm-3">
// //     <div id="engineer">
// //         <h2> Engineer<h2>
// //         <ul>
// //         <li><p id="name"> Name:${answers.engineerName}.</p>
// //         <li><p id="role"> Role:${answers.getRole()}.</p>
// //         <li><p id="id">ID:${answers.engineerId}.</p>
// //         <li><p id="email"> Email:${answers.engineerEmail}.</p>
// //         <li><p id="github"> GitHub:${answers.engineerGithub}.</p>
// //         </ul>
// //     </div>  
// //  </div> `;
// //  }

//  function renderHTML(list) {
// return `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"> 
//     <link rel="stylesheet" type "text/css" href="./CSS/style.css">
//     <title>My Team</title>
// </head>
//     <body>
//         <div class="container-fluid">
//         <div class="row">
//             <div class="col-12 jumbotron mb-3 team-heading">
//                 <h1 class="text-center">My Team</h1>
//             </div>
//         </div>
//     </div>
//     <div class="col-sm-3">
//    <div id="manager">
//        <h2> Manager<h2>
//        <ul>
//        <li><p id="name"> Name:${answers.managerName}.</p>
//        <li><p id="name"> Role:${answers.getRole()}.</p>
//        <li><p id="id">ID:${answers.managerId}.</p>
//        <li><p id="email"> Email:${answers.managerEmail}.</p>
//        <li><p id="phone"> Office Number:${answers.officeNumber}.</p>
//        </ul>
//    </div>   
// </div>
// <div class="col-sm-3">
//     <div id="engineer">
//         <h2> Engineer<h2>
//         <ul>
//         <li><p id="name"> Name:${answers.engineerName}.</p>
//         <li><p id="role"> Role:${answers.getRole()}.</p>
//         <li><p id="id">ID:${answers.engineerId}.</p>
//         <li><p id="email"> Email:${answers.engineerEmail}.</p>
//         <li><p id="github"> GitHub:${answers.engineerGithub}.</p>
//         </ul>
//     </div>  
//  </div>
//  <div class="col-sm-3">
//     <div id="engineer">
//         <h2> Engineer<h2>
//         <ul>
//         <li><p id="name"> Name:${answers.engineerName}.</p>
//         <li><p id="role"> Role:${answers.getRole()}.</p>
//         <li><p id="id">ID:${answers.engineerId}.</p>
//         <li><p id="email"> Email:${answers.engineerEmail}.</p>
//         <li><p id="github"> GitHub:${answers.engineerGithub}.</p>
//         </ul>
//     </div>  
//  </div>
//     </body>
// </html>`;
// }


//  module.exports = renderHTML;