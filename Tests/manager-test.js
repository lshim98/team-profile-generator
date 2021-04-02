const Manager = require('../Dev/Manager(s)');
const Employee = require('../Dev/work-employees');


describe('Manager', () => {

    it('email address entered', () => {
        const managerEmail = "email@email.com";
        const result = new managerEmail();

        expect(result).toEqual("email@email.com");
    });

    it('phone number entered', () => {
        const managerPhone = "916-475-0812";
        const result = new managerPhone();

        expect(result).toEqual("916-475-0812");
    });
});
