const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const employee = require("./lib/employee");
const employeeList = [];

const generateHTML = require("./src/generateHTML.js");

//Manager questions for inquirer
const managerQs = [
  {
    type: "input",
    name: "name",
    message: "Enter manager name",
    validate(value) {
      if (!value) {
        return "Manager name cannot be empty";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Enter manager ID",
    validate(value) {
      if (!value) {
        return "ID cannot be empty";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    name: "email",
    message: "Enter manager email",
    validate(value) {
      if (!value) {
        return "Email cannot be empty";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    name: "office",
    message: "Enter manager office number",
    validate(value) {
      if (!value) {
        return "Office number cannot be empty";
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "addNew",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
  },
];

//questions for engineer
const engineerQs = [
  {
    type: "input",
    name: "name",
    message: "Enter engineer name",
    validate(value) {
      if (!value) {
        return "Name cannot be empty";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "Enter engineer ID",
    validate(value) {
      if (!value) {
        return "ID cannot be empty";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    name: "email",
    message: "Enter engineer email",
    validate(value) {
      if (!value) {
        return "Email cannot be empty";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    name: "github",
    message: "Enter engineer's GitHub username",
    validate(value) {
      if (!value) {
        return "Username be empty";
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "addNew",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
  },
];

const employeePrompt = {
  type: "list",
  name: "empType",
  message: "Choose type of employee",
  choices: ["Engineer", "Intern"],
};

const createEmployee = () => {
  inquirer.prompt(employeePrompt).then((response) => {
    console.log("createEmployee response = " + response);
    if (response.empType === "Engineer") {
      addEngineer();
    } else {
      addIntern();
    }
  });
};

const addEngineer = () => {
  inquirer
    .prompt(engineerQs)
    .then((responses) => {
      const newEngineer = new employee( //change to engineer
        responses.name,
        responses.id,
        responses.email
      );
      employeeList.push(newEngineer);
      console.log(employeeList); // delete
      if (responses.addNew === "Yes") {
        createEmployee();
      }
      //   const HTMLContent = generateHTML(responses); // move
      //   writeToFile("./dist/index.html", HTMLContent); //move
    })
    .catch((err) => console.error(err));
};
const addIntern = () => {};

const addManager = () => {
  inquirer
    .prompt(managerQs)
    .then((responses) => {
      const newManager = new employee( //change to manager
        responses.name,
        responses.id,
        responses.email
      );
      employeeList.push(newManager);
      console.log(employeeList); // delete
      if (responses.addNew === "Yes") {
        createEmployee();
      }
      //   const HTMLContent = generateHTML(responses); // move
      //   writeToFile("./dist/index.html", HTMLContent); //move
    })
    .catch((err) => console.error(err));
};

function init() {
  addManager();
}

//create index.html
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("index.html successfully created.")
  );
}

// Function call to initialize app
init();

///
// //array of questions for inquirer
// const questions = [
//   {
//     type: "input",
//     name: "name",
//     message: "Enter employee name",
//     validate(value) {
//       if (!value) {
//         return "Name cannot be empty";
//       } else {
//         return true;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "id",
//     message: "Enter employee ID",
//     validate(value) {
//       if (!value) {
//         return "Name cannot be empty";
//       } else {
//         return true;
//       }
//     },
//   },

//   {
//     type: "input",
//     name: "email",
//     message: "Enter employee email",
//     validate(value) {
//       if (!value) {
//         return "Name cannot be empty";
//       } else {
//         return true;
//       }
//     },
//   },
// ];

// function init() {
//   inquirer
//     .prompt(questions)
//     .then((responses) => {
//       const HTMLContent = generateHTML(responses);
//       writeToFile("./dist/index.html", HTMLContent);
//     })
//     .catch((err) => console.error(err));
// }

// //create index.html
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log("index.html successfully created.")
//   );
// }

// // Function call to initialize app
// init();
