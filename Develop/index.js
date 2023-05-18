// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeTurtles = require('./writeTurtles');
const fs = require('fs');

function turtleSoup(turtleData){
    fs.writeFile('README.md', turtleData, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

function init (){
inquirer
.prompt([
    {
        message: 'what is the title of your project',
        name: 'title',
    },
    {
        name: 'description',
        message: 'write a description of the project',
    },
    {
        name: 'installation',
        message: 'how do you install the project',
    },
    {
        name: 'usage',
        message: 'how do you use the project',
    },
    {
        name: 'contributng',
        message: 'what guidelines should contributers follow',
    },
    {
        name: 'tests',
        message: 'how should you test the project',
    },
    {
        type: 'list',
        name: 'liscense',
        message: 'what liscense did you use',
        choices: [
            {
                name: 'Apache License 2.0',
                value: 'Apache License 2.0',
            },
            {
                name: 'GNU General Public License v3.0',
                value: 'GNU General Public License v3.0',
            },
            {
                name: 'MIT License',
                value: 'MIT License',
            },
            {
                name: 'BSD 2-Clause "Simplified" License',
                value: 'BSD 2-Clause "Simplified" License',
            },
            {
                name: 'BSD 3-Clause "New" or "Revised" License',
                value: 'BSD 3-Clause "New" or "Revised" License',
            },
        ]
    },
    {
        name: 'Questions',
        message: 'what is your GitHub username',
        message: 'what is your email address',
    },
])
.then( answers => {
    console.log('Answer:', answers);
    turtleSoup(writeTurtles.giveMeTurtles(answers.turtles));
});
}
init();

