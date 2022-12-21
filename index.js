// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = require("questions");
const links = require("links");
const fs = require("fs");

questions
.prompt([
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

var nameInput = response.username;
var title = response.title;
var description = response.description;
var usage = response.usage;
var license = response.license;
var contributions = reponse.contributions;
var tests = response.tests;
var badgeLabel =
var badgeUrl =





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
${tests}
***

        




  

module.exports = generateMarkdown;





// [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-yellow.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})