const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

inquirer
    .prompt([
        {
            type: "list",
            message: "What type of employee is this?",
            name: "employee",
            choices: ["Engineer", "Manager", "Intern"],
        },
    ])
    .then(function (response) {
        console.log(response.employee);
        switch (response.employee) {
            case "Engineer":
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "What is the Engineer's name?",
                            name: "name",
                        },
                        {
                            type: "input",
                            message: "What is the Engineer's id?",
                            name: "id",
                        },
                        {
                            type: "input",
                            message: "What is the Engineer's github?",
                            name: "github",
                        },
                    ])
                    .then(function (response) {
                        console.log(response.employee);
                    });

                break;
            case "Manager":
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "What is the Managerr's name?",
                            name: "name",
                        },
                        {
                            type: "input",
                            message: "What is the Managers's id?",
                            name: "id",
                        },
                        {
                            type: "input",
                            message: "What is the Manager's's office number?",
                            name: "officeNumber",
                        },
                    ])
                    .then(function (response) {
                        console.log(response);
                    });

                break;
            case "Intern":
                inquirer
                    .prompt([
                        {
                            type: "input",
                            message: "What is the Intern's name?",
                            name: "name",
                        },
                        {
                            type: "input",
                            message: "What is the Intern's id?",
                            name: "id",
                        },
                        {
                            type: "input",
                            message: "Where is the Intern attending school?",
                            name: "school",
                        },
                    ])
                    .then(function (response) {
                        var internName = {
                            employee: "intern",
                        };
                        console.log(internName);
                        // response.push(internName);
                        console.log(typeof response);
                        console.log(response);
                    });

                break;
        }

        // let questions = `## Questions\nContact to me with any questions at www.github.com/${response.github} or email me at ${response.email}`;
        // let readme =
        //     title + desc + table + install + usage + license + contribute + tests + questions;
        // fs.writeFile("exampleREADME.md", readme, function (err) {
        //     if (err) {
        //         return console.log(err);
        //     }

        //     console.log("success");
    });

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
