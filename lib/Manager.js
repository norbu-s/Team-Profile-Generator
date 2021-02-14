// Class for Manager.
class Manager{
    construtor (name,id, email,officenumber, role) {
        this.name = name,
        this.id = id,
        this.email = email
        this.officeNumber = officeNumber,
        this.role = role
    }
    getName() {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return "Manager"
    }
}

module.exports = Manager;