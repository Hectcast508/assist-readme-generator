// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project? (Required)'
    }
  ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', generatePage(fileName, data), err => {
    if (err) throw err;
    console.log('README file complete!');
  });
};

// TODO: Create a function to initialize app
function init() {
  questions()
    .then(writeToFile);
  
}

// Function call to initialize app
init();
