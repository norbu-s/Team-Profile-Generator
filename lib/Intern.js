// Class for Intern
class Intern {
    constructor (name,id, email,school,role)  {
        this.name = name,
        this.id = id,
        this.email = email,
        this.school = school,
        this.role = role
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}