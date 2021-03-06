const Intern = require('../Dev/Intern(s)');

describe('Intern', () => {

    it('email address entered', () => {
        const employeeEmail = "email@email.com";
        const result = new employeeEmail();

        expect(result).toEqual("email@email.com");
    });

    it('github url entered', () => {
        const github = "github.com/intern";
        const result = new github();

        expect(result).toEqual("github.com/intern");
    });

    it('school name entered', () => {
        const school = "The OSU Bootcamp";
        const result = new school();

        expect(result).toEqual("The OSU Bootcamp");
    });
});

describe('Intern-#2', () => {

    it('email address entered', () => {
        const employeeEmail = "intern@email.com";
        const result = new employeeEmail();

        expect(result).toEqual("intern@email.com");
    });

    it('github url entered', () => {
        const github = "github.com/intern-#2";
        const result = new github();

        expect(result).toEqual("github.com/intern-#2");
    });

    it('school name entered', () => {
        const school = "The OSU Bootcamp";
        const result = new school();

        expect(result).toEqual("The OSU Bootcamp");
    });
});
