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
      message: 'Enter your GitHub username. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.log('Please enter your GitHub Username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.log('Please provide a project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.log('Please provide a description of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.log('Please provide installation steps!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.log('Please provide instructions and examples for use!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Does your project have a license?',
      default: true
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project.',
      choices: ['Apache', 'GNU', 'MIT', 'ISC'],
      when: ({confirmLicense}) => {
        if (confirmLicense) {
          return true;
        }else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'List way that others can contribute to your application. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.log('Please enter ways to contribute to application!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'test',
      message: 'Is there an example on how to test your application? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }else {
          console.log('Please provide how to test your application!');
          return false;
        }
      }
    }
  ])
};

// TODO: Create a function to write README file
// function that writes README file to the dist folder, takes the generateMarkdown file as the README.
function writeToFile(fileName, data) {
  fs.writeFile('./dist/README.md', generatePage(fileName, data), err => {
    if (err) throw err;
    console.log('README file complete!');
  });
};

// TODO: Create a function to initialize app
// function that call the question function then calls the writetofile function.
function init() {
  questions()
    .then(writeToFile);
  
}

// Function call to initialize app
init();
