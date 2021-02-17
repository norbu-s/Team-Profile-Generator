//Render Manager
function renderManagerName(managerName) {
  if (managerName === '') {
      return '';
      } else { 
      return ` Name: ${managerName}.`
      }
  }

function renderManagerId(managerId) {
  if (managerId === '') {
      return '';
      } else { 
      return ` ID: ${managerId}.`
      }
  }

function renderManagerEmail (managerEmail) {
  if (managerEmail === '') {
      return '';
      } else { 
      return ` Email: ${managerEmail}.`
      }
  }
             
function renderOfficeNumber(officeNumber) {
  if (officeNumber  === '') {
      return '';
      } else { 
      return ` Office Number : ${officeNumber}.`
      }
  }

//Render Engineer
function renderEngineerName(engineerName) {
  if (engineerName === '') {
      return '';
      } else { 
      return ` Name: ${engineerName}.`
      }
  }

function renderEngineerId(engineerId) {
  if (engineerId === '') {
      return '';
      } else { 
      return ` ID: ${engineerId}.`
      }
  }
   
function renderEngineerEmail(engineerEmail) {
  if (engineerEmail === '') {
      return '';
      } else { 
      return ` Email: ${engineerEmail}.`
      }
  }        

function renderEngineerGithub(engineerGithub) {
  if (engineerGithub === '') {
      return '';
      } else { 
      return ` Github: ${engineerGithub}.`
      }
  }


//Render Intern
function renderInterName(internName) {
  if (internName === '') {
      return '';
      } else { 
      return `Name: ${internName}.`
      }
}

function renderInterId(internId) {
  if (internId === '') {
      return '';
      } else { 
      return `ID: ${internId}.`
      }
}

function renderInterEmail(internEmail) {
  if (internEmail === '') {
      return '';
      } else { 
      return `Email: ${internEmail}.`
      }
}

function renderInternSchool(internSchool) {
  if (internSchool === '') {
      return '';
      } else { 
      return `School: ${internSchool}.`
      }
}

function renderInternNewUser(internNewUser) {
  if( internNewUser === "Engineer") {
      promptEngineer();
  }
  if( internNewUser === "Intern") {
      promptIntern();
  }
  if( internNewUser === "Finish building my team") {
      generateMarkdown();
  }
}

function generateMarkdown(data) {
  return ` 
${renderManagerName(data.managerName)}
${renderManagerId(data.managerID)}
${renderManagerEmail(data.managerEmail)};
${renderOfficeNumber(data.officeNumber)};
${renderEngineerName(data.engineerName)};
${renderEngineerId(data.engineerId)};
${renderEngineerEmail(data.engineerEmail)};
${renderEngineerGithub(data.engineerGithub)};
${renderInterName(data.internName)};
${renderInterId(data.interId)};
${renderInterEmail(data.internEmail)};
${renderInternSchool(data.internSchool)}`;
}


module.exports = generateMarkdown;