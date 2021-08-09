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
        message: 'What is the title of your project.?',
          },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project to the user? Please also include the deployed url for this project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How can the user install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What instructions would you provide to the user of this project?',
      },
      {
        type: 'list',
        name: 'license',
        choices: ['GNU GPLv2','GNU GPLv3','Apache License 2.0','MIT License','ISC License', 'No License'],
        message: 'Are there any licenses associated with this project?',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Are there any collaborators on this project? Please provide contact information as well as GitHub profiles on any collaborators for this project.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Did you write any tests for this application? Please detail them here.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username.',
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
- [Tests](#tests)
- [License](#license)
- [Contact Information](#contact-information)


## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## Tests
${answers.tests}

## License
Code released under the ${answers.license}

## Contact Information
If you have any questions about this project, please email me here: ${answers.email}. My GitHub username is: ${answers.github}`

  
  const init = () => {
    generateQuestions()
      .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
      .then(() => console.log('A README.md file was successfully created with your input!'))
      .catch((err) => console.error(err));
  };
  
  init();