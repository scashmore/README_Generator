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
        {
            type : "input",
            message: "Email:",
            name: "email"
        },
        {
            type : "input",
            message: "GitHub:",
            name: "github"
        }

    ])
    .then((r) => {

        const md =
            `# ${answers.title}

![badge](https://img.shields.io/badge/license-${answers.license})

## Description
 ${answers.description}

## Table of Contents
[Instal](#instal)
[Usage](#usage)
[License](#license)
[Contributers](#contributers)
[Tests](#tests)
[Questions](#questions)

## Instal
${answers.instal}

## Usage
${answers.usage}

## License
${answers.license}

## Contributers
${answers.contrib}

## Tests
${answers.test}

## Questions
${answers.questions}`
        fs.writeFile('README.md', md, (e) =>
            e ? console.log('Error') : console.log('Success'));
    }
    );

