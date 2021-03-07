const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            message: "Project title:",
            name: "title"
        },
        {
            type: "input",
            message: "Description:",
            name: "description"
        },
        {
            type: "input",
            message: "Installation:",
            name: "instal"
        },
        {
            type: "input",
            message: "Usage:",
            name: "useage"
        },
        {
            type : "input",
            message: "License:",
            name: "license"

        },
        {
            type : "input",
            message: "Contributing:",
            name: "contrib"

        },
        {
            type : "input",
            message: "Tests:",
            name: "tests"

        },
        {
            type : "input",
            message: "Questions:",
            name: "questions"

        },

    ])
    .then((r) => {

        const md =
            ``
        fs.writeFile('README.md', md, (e) =>
            e ? console.log('Error') : console.log('Success'));
    }
    );

