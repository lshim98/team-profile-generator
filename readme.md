# Team Profile Generator
--------------------------------------------------------------------------------------------------------------------------------------------------

## Your Task
--------------------------------------------------------------------------------------------------------------------------------------------------

Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.


## User Story
--------------------------------------------------------------------------------------------------------------------------------------------------

```md
AS A Student
I WANT to generate a webpage that displays my team's basic profile
SO THAT I have quick look at their professional profiles and contact information
```


## Getting Started
--------------------------------------------------------------------------------------------------------------------------------------------------

Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like the following example:

```md
__tests__/			// jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output (HTML) and CSS style sheet
lib/				// classes
src/				// template helper code
index.js			// runs the application
```

The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

### Installation
--------------------------------------------------------------------------------------------------------------------------------------------------

In order to use the team-profile generator: 
1. Use Git Bash or a VS terminal to run the following: 
   * Run 'npm i' to pull down the npm node package manager
   * Run 'npm init -y' to install package.json
   * Run 'npm install inquirer' to install the inquirer package
   * Run 'npm install --save-dev jest' to install the jest testing package
2. Open the index.js file in Git Bash or the VS terminal
3. Run 'node index.js' to begin the team-profile generator
4. To run a test, open the 'employees.test.js' file in Git Bash or the VS terminal
5. Run 'npm run test' to run the tests to see if they all pass.


### Walkthrough Demostrations
--------------------------------------------------------------------------------------------------------------------------------------------------



---

## License
--------------------------------------------------------------------------------------------------------------------------------------------------
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact
--------------------------------------------------------------------------------------------------------------------------------------------------
If you have any questions, please contact me at:\
✉️[Email](mailto:lshim1720@gmail.com)\
📂[GitHub](<https://github.com/lshim98>)


--------------------------------------------------------------------------------------------------------------------------------------------------
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
