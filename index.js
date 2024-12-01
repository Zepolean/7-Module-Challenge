// TODO: Include packages needed for this application
import fs from 'node:fs';

import inquirer from 'inquirer';

import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title?',
        }, {
            type: 'input',
            name: 'desc',
            message: 'Enter the description:'
        }, {
            type: 'input',
            name: 'install',
            message: 'Enter the Installation:'
        }, {
            type: 'input',
            name: 'usage',
            message: 'What is the Usage?'
        }, 
        {
            type: 'list',
            name: 'license',
            message: 'What is the License?',
            choices: [
                'MIT License',
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense',
                'NO LICENSE'
            ]
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter Contributing:'
        }, {
            type: 'input',
            name: 'testing',
            message: 'Enter Testing:'
        }, {
            type: 'input',
            name: 'ghUser',
            message: 'Enter your GitHub Username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:'
        },
    ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error){
            return console.error(error)
        } else {
            console.log("Generating README.md...")
     }
})};

// TODO: Create a function to initialize app
function init () {
    promptUser()
      .then(answers => { writeToFile('customized-README.md', generateMarkdown(answers))})
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
