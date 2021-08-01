const generalQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What is this employee's name?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is this employee's email?",
  },
];

const managerQuestions = [
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is this employee's office number?",
  },
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'github',
    message: "What is this employee's github username?",
  },
];

const internQuestions = [
  {
    type: 'input',
    name: 'school',
    message: "What is this employee's school?",
  },
];

module.exports = (role) => {
  switch (role) {
    case 'Manager':
      return generalQuestions.concat(managerQuestions);
    case 'Engineer':
      return generalQuestions.concat(engineerQuestions);
    case 'Intern':
      return generalQuestions.concat(internQuestions);
  }
};
