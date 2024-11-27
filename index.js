// TODO: Include packages needed for this application
import fs from 'node:fs';

import inquirer from 'inquirer';


const generateRM = ({ title, desc, toc, install, usage, license, contribute, testing, questions }) => {
    return `
    # ${title}

    ## Description

    ${desc}

    ## Table of Contents

    ${toc}

    ## Installation

    ${install}

    ## Usage

    ${usage}

    ## License

    ${license}

    ## How to Contribute

    ${contribute}

    ## Tests

    ${testing}

    ## Questions

    ${questions}
    `
};
// TODO: Create an array of questions for user input
inquirer.prompt ([{
        type: 'input',
        name: 'title',
        message: 'What is the title?'
    }, {
        type: 'input',
        name: 'desc',
        message: 'Enter the description:'
    }, {
        type: 'input',
        name: 'toc',
        message: 'Enter the Table of Contents:'
    }, {
        type: 'input',
        name: 'install',
        message: 'Enter the Installation:'
    }, {
        type: 'input',
        name: 'usage',
        message: 'What is the Usage?'
    }, {
        type: 'input',
        name: 'license',
        message: 'What is the license?'
    }, {
        type: 'input',
        name: 'contribute',
        message: 'Enter Contributing:'
    }, {
        type: 'input',
        name: 'testing',
        message: 'Enter testing:'
    }, {
        type: 'input',
        name: 'questions',
        message: 'Enter questions:'
    },
]).then(answers =>{

    const ansData = generateRM(answers);
    writeToFile('README.md', ansData);
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (error){
        if (error){
            return console.error(error)
        } else {
            console.log("README has been written!")
     }
})};

// TODO: Create a function to initialize app

// function init = () => {
//     promptUser()
//       // Use writeFile method imported from fs.promises to use promises instead of
//       // a callback function
//       .then((answers) => writeFile('index.html', generateHTML(answers)))
//       .then(() => console.log('Successfully wrote to index.html'))
//       .catch((err) => console.error(err));
//   };
  
//   init();

// Function call to initialize app
// init();
