const Employee = require('./work-employees');

class Engineer extends Employee {
    constructor (name, employeeID, employeeEmail, github) {
        super(name, employeeID);
	this.employeeEmail = employeeEmail;
        this.github = github;
    }

    getRole() { return 'Engineer' };

    getEmail() { return this.employeeEmail };

    getGithub() { return this.github };
}

module.exports = Engineer;
