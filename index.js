// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: ' input',
      name: 'github',
      message: 'Enter your GitHub username. (Required)'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address. (Required)'
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project? (Required)'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project. (Required)'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? (Required)'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. (Required)'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project.',
      choices: ['Apache', 'GNU', 'MIT', 'ISC'],
      default: false
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'List way that others can contribute to your application. (Required)'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Is there an example on how to test your application? (Required)'
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
