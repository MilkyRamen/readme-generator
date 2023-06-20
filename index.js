// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { default: InputPrompt } = require('inquirer/lib/prompts/input');
// TODO: Create an array of questions for user input
const questions =[
        {
            type: 'input',
            name: 'title',
            message: 'Enter the project title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'enter a description',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'enter installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'enter usage information',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'enter contributers',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'enter test instructions',
        },
        {
            type: 'list',
            name: 'license',
            choices: ['MIT', 'Apache', 'GPL', 'None'],
        },
        {
            type: 'input',
            name: 'ghUser',
            message: 'enter GitHub username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter your email address',
        },
];
function generateREADME(answers) {
    return `
    # ${answers.title}
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.insallation}
    
    ## Usage
    ${answers.usage}
    
    ## License
    this application uses the ${answers.license} license.
    
    ## Contributing
    ${answers.contributing}
    
    ## Tests
    ${answers.tests}
    
    ## Questions
    for any questions please contact via email at ${answers.email}.
    visit my github at (https://github.com/${answers.ghUser}).
    `;
}

inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md successfully generated');
    });
});

