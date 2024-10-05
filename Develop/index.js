// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { promises as fs } from 'fs';
import { renderLicenseBadge } from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
 async function collectUserInput() {
        const response = await inquirer.prompt([
    {
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        message: "Please provide a detailed description of your project, explaining the what, why, and how behind it's creation:",
        name: 'projectDecription',
    },
    {
        message: 'Please select all sections that you want to include in your README Table of Contents:',
        name: 'tableOfContents',
        type: 'checkbox',
        choices: [
            'License',
            'Installation',
            'Usage',
            'Contributing',
            'Tests',
            'Questions',
        ]
    },
    {
        message: 'Would you like to use a license?',
        name: 'projectLicense',
        type: 'list',
        choices: [
            'MIT',
            'Other2',
            'Other3',
            'None',
        ]
    },
    {
        message: 'What are the exact steps that need to be taken to get the deployment environment up and running? Please be sure to include detailed instructions:',
        name: 'deploymentSteps',
    },
    {
        message: 'Please provided details instructions for use. Screenshots should be used when relevant (placed in the assets/images folder): ',
        name: 'projectFunctionality',
    },
    {
        message: 'Please provide a list of collaborators, third party assets, and tuorials used for the project:',
        name: 'projectCollaborators',
    },
    {
        message: 'What are the tests for your application? Provide examples on how to run the tests:',
        name: 'projectTests',
    },
    {
        message: 'Please provide contact information for where users can reach out if they have questions regarding the project:',
        name: 'projectQuestions',
    }
    
]);


return response;
 }

renderLicenseBadge();

// TODO: Create a function to write README file
async function writeToFile(fileName, response) {
    const markdownContent = `
    # ${response.projectTitle}
    ## Description \n${response.projectDescription}
    ## Table of Contents \n${response.tableOfContents}
    ## License \n${response.projectLicense}
    ## Installation \n${response.foodCategory}
    ## Usage \n${response.projectFunctionality}
    ## Contributing \n${response.projectCollaborators}
    ## Tests \n${response.projectTests}
    ## Questions \n${response.projectQuestions}
    `;

    await fs.writeFile(fileName, markdownContent);
    console.log('README successfully generated!')
}

// TODO: Create a function to initialize app
async function init() {
    const menuResponse = await inquirer.prompt({
        message: 'Welcome to the markdown generator. Do you want to generate a file or exit?',
        name: 'menuResponse',
    })
}

// Function call to initialize app
init();

export default init;
export {collectUserInput, response};

