// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    switch(license) {
      case 'MIT':
        return '![License](https://img.shields.io/badge/license-MIT-green.svg)';
      case 'Apache 2.0':
        return '![License](https://img.shields.io/badge/license-Apache%202-blue.svg)';
      case 'BSD 3 Clause':
        return '![License](https://img.shields.io/badge/license-BSD--3-green.svg)';
      case 'BSD 2 Clause':
        return '![License](https://img.shields.io/badge/license-BSD--2-blue.svg)';
      case 'GPL':
        return '![License](https://img.shields.io/badge/license-GPL-blue.svg)';
      case 'LGPL':
        return '![License](https://img.shields.io/badge/license-LGPL-green.svg)';
      case 'MPL 2.0':
        return '![License](https://img.shields.io/badge/license-MPL%202.0-lightgrey.svg)';
      case 'CDDL':
        return '![License](https://img.shields.io/badge/license-CDDL-yellow.svg)';
      case 'EPL 2.0':
        return '![License](https://img.shields.io/badge/license-EPL%202.0-red.svg)';
      default:
        return '';
    } 
  } else {
    return '';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    switch(license) {
      case 'MIT':
        return '[MIT](https://opensource.org/licenses/MIT)';
      case 'Apache 2.0':
        return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
      case 'BSD 3 Clause':
        return '[BSD 3 clause](https://opensource.org/licenses/BSD-3-Clause)';
      case 'BSD 2 Clause':
        return '[BSD 2 Clause](https://opensource.org/licenses/BSD-2-Clause)';
      case 'GPL':
        return '[GPL](https://opensource.org/licenses/gpl-license)';
      case 'LGPL':
        return '[LGPL](https://opensource.org/licenses/lgpl-license)';
      case 'MPL 2.0':
        return '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)';
      case 'CDDL':
        return '[CDDL](https://opensource.org/licenses/CDDL-1.0)';
      case 'EPL 2.0':
        return '[EPL 2.0](https://opensource.org/licenses/EPL-2.0)';
      default:
        return '';
    } 
  } else {
    return '';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseLink(license)}
  `
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}\n
  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Contribution Instructions](#contribution-instructions)
  - [Testing Instructions](#testing-instructions)
  - [License](#license)
  - [Questions](#questions)
  ## Description
  ${data.description}\n
  ## Installation Instructions
  ${data.installation}\n
  ## Usage Instructions
  ${data.usage}\n
  ## Contribution Instructions
  ${data.contribution}\n
  ## Testing Instructions
  ${data.test}\n
  ${renderLicenseSection(data.license)}
  ## Questions
  Check out my [Github](https://github.com/${data.github})\n
  Or [email me](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
