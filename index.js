
const inquirer = require("questions");
const links = require("links");
const fs = require("fs");

// questions that are being asked
const prompt = inquirer.createPromptModule()

prompt([
    {
    type: "input",
    message: "What is your Github username?",
    name: "username"
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Give a description of your project:",
    name: "description"
  },
  {
    type: "input",
    message: "Give the installation process here:",
    name: "install"
  },
  {
    type: "input",
    message: "Outline usage information for your project:",
    name: "usage"
  },
  {
    type: "input",
    message: "Explain licensing of your project:",
    name: "license"
  },
  {
    type: "input",
    message: "What contributions will be considered for this project?",
    name: "contributions"
  },
  {
    type: "input",
    message: "What tests does this project feature if there are any?",
    name: "tests"
  },
  {
    type: "input",
    message: "What badge label would you like to use for your project?",
    name: "badgeLabel"
  },
  
])

// vars that are made from the "names" in the questions being asked
.then(function(response) {
let nameInput = response.username;
let title = response.title;
let description = response.description;
let usage = response.usage;
let license = response.license;
let contributions = reponse.contributions;
let tests = response.tests;
// let badgeLabel =
// let badgeUrl =

links({
    method: 'get',
    url: `https://api.github.com/users/${nameInput}`,
  })
    .then(function(response) {
    var email = response.data.email;
  
  


  const script = ` ![badge image](${badgeUrl} "Project Badge")


// sections of a ReadMe
 #${title}
***
## Description
${description}
***
## Table of Contents
- Installation
- Usage
- Licensing Info
- Contributions
- Tests
- Creator Info
***
## Installation Requirements
${install}
***
## Usage
${usage}
***
## Licensing Info
${license}
***
## Contributions
${contributions}
***
## Tests
${tests}`

fs.writeFile("README.md", script, function(err) {
              
    if (err) {
        return console.log(err);
        }
          
        console.log('Your README.md is successfully created!');
          
    });
});
}

);




module.exports = generateMarkdown;





// [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})