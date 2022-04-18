// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributions](#contributions)
  -[Tests](#tests)
  -[Questions about application](#questions about application)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  Application is covered under ${data.license}.

  ## Contributions
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions about application
  https://github.com/${data.github}
  
  For additional question reach me at ${data.email}

`;
}

module.exports = generateMarkdown;
