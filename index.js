// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const questions = [
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How would someone contribute to your project?',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'How would someone test your project?',
        name: 'test',
      },
      {
        type: 'list',
        message: 'What license are you using?',
        choices: ['N/A','MIT','Apache 2.0', 'BSD 3 Clause', 'BSD 2 Clause', 'GPL', 'LGPL', 'MPL 2.0', 'CDDL', 'EPL 2.0'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
      }
];

// function to write to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(`${fileName} successfully generated!`);
    })
}

// function to run when index is called
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            const markdown = generateMarkdown(response);
            writeToFile('README.md', markdown);
        })
}

// Function call to initialize app
init();
