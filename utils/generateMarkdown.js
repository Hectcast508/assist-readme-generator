// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (!license) {
    return '';
  }
  return`
  ![Badge](https://img.shields.io/badge/License-${license}-blue)
  `;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (!license) {
    return '';
  }
  return`
  ## License
  This application is covered under ${license} license.
  `;
}; 

// TODO: Create a function to generate markdown for README
module.exports = generateMarkdown => {

  const {license, ...header} = generateMarkdown;

  return `
  # ${header.title}

  ${renderLicenseBadge(license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions about application](#questions-about-application)

  ## Description
  ${header.description}

  ## Installation
  ${header.installation}

  ## Usage
  ${header.usage}

  ${renderLicenseSection(license)}

  ## Contributions
  ${header.contributing}

  ## Tests
  ${header.test}

  ## Questions about application
  https://github.com/${header.github}
  
  For additional question reach me at ${header.email}

`;
}

