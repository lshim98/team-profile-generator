const Employee = require("./work-employees");
const Engineer = require("./Engineer(s)");
const Intern = require("./Intern(s)");
const Manager = require("./Manager(s)");

function generateHTML(data) {

    const generateManager = manager => {
        return `<div class="cardBody" id="manager">
        <h2 class="manHeading">${manager.getRole()}</h2>
        <p><strong>${manager.getName()}</strong></p>
        <p>${manager.getID()}</p>
        <p><a href=${manager.getEmail()}>${manager.getEmail()}</a></p>
        <p>${manager.getPhone()}</p>
        </div>`
    }

    const generateEngineer = engineer => {
        return `<div class="cardBody" id="engineer">
        <h2 class="engHeading">${engineer.getRole()}</h2>
        <p><strong>${engineer.getName()}</strong></p>
        <p>${engineer.getID()}</p>
        <p><a href="${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p><a href="${engineer.getGithub()}">${engineer.getGithub()}</a></p>
        </div>`
    }

    const generateIntern = intern => {
        return `<div class="cardBody" id="intern">
        <h2 class="intHeading">${intern.getRole()}</h2>
        <p><strong>${intern.getName()}</strong></p>
        <p>${intern.getID()}</p>
        <p><a href=${intern.getEmail()}>${intern.getEmail()}</a></p>
        <p><a href=${intern.getGithub()}>${intern.getGithub()}</a></p>
        <p>${intern.getSchool()}</p>
        </div>`
    }

    const html = []

    //push data for each employee into html
    html.push(data.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)))
    html.push(data.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)))
    html.push(data.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)))

module.exports = generateHTML;

<<<<<<< HEAD
}
=======
}
>>>>>>> cf70f205ba520bec7c20697eb1394e7824f3327c
