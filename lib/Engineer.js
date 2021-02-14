// Class for Engineer
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name,id, email,githubUsername)  {
        super(name,id,email)
        this.githubUsername = githubUsername
    }
    getGithubUsername () {
        return this.githubUsername;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;