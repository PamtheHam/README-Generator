// <!-- Must submit

// * A sample README generated using the application must be submitted.
// * Your GitHub repository containing your application code.
// a link to the video should be included in your README file.
// Include any other screenshots you deem necessary to help someone
// the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions


const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const generateQuestions = () => {
   return inquirer.prompt([
        {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.',
          },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter a step-by-step instruction on how to install your project.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions or examples for the use of your project.',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Please provide contact information as well as GitHub profiles on any collaborators for this project.',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Please detail any licenses that you have for this project and their description.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
      },
    ]);
  };

const generateReadMe = (answers) => 

`${answers.title}

## Description
${answers.description}


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contact Information](#contact-information)


## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}

## Contact Information
${answers.email}
${answers.github}`

  
  const init = () => {
    generateQuestions()
      .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
      .then(() => console.log('Successfully wrote to README.md!'))
      .catch((err) => console.error(err));
  };
  
  init();