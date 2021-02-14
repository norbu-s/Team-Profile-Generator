// Class for Engineer
class Engineer {
    constructor (name,id, email,githubUsername,role)  {
        this.name = name,
        this.id = id,
        this.email = email,
        this.githubUsername = githubUsername,
        thie.role = role
    }
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getGithubUsername () {
        return this.githubUsername
    }

    getRole () {
        return "Engineer"
    }
}

module.exports = Engineer;