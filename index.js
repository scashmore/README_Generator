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
            `# ${r.title}

![badge](https://img.shields.io/badge/license-${r.license})

## Description
 ${r.description}

## Table of Contents
[Instal](#instal)
[Usage](#usage)
[License](#license)
[Contributers](#contributers)
[Tests](#tests)
[Questions](#questions)

## Instal
${r.instal}

## Usage

${r.usage}

## License

![badge](https://img.shields.io/badge/license-${r.license})

Licensed by ${r.license}

## Contributers

The following have contributed to this project:
${r.contrib}

## Tests
${r.test}

## Questions

Contact me via email: ${r.email} 
Contact me via GitHub: ${r.github}`
        fs.writeFile('./readme/README.md', md, (e) =>
            e ? console.log('Error') : console.log('Success'));
    }
    );

