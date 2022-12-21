
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");
const fs = require("fs");

// questions that are being asked
const questions = () => {
return inquirer.prompt([
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
    message: "What contributions will be considered for this project?",
    name: "contributions"
  },
  {
    type: "input",
    message: "What tests does this project feature if there are any?",
    name: "tests"
  },
  {
    type: "list",
    message: "What badge label would you like to use for your project?",
    name: "badgeLabel",
    choices: ['MIT', 'ISC', 'Mozilla Public License 2.0']

  },
  
])

};


  

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
          console.log(err);
        } else {
          console.log('You Made A ReadMe!');
        }
              
    })
};

questions()
.then(answers => {
  return generate(answers);
})
.then(data =>{
  return writeFile(data);
});








