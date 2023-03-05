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
];

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
];

const addManager = () => {
  inquirer
    .prompt(managerQs)
    .then((responses) => {
      const newEmployee = new employee(
        responses.name,
        responses.id,
        responses.email
      );
      employeeList.push(newEmployee);
      console.log(employeeList); // delete
      const HTMLContent = generateHTML(responses); // delete
      writeToFile("./dist/index.html", HTMLContent);
    })
    .catch((err) => console.error(err));
};

function init() {
  addManager();
  //   inquirer
  //     .prompt(questions)
  //     .then((responses) => {
  //       const newEmployee = new employee(responses);
  //       employeeList.push(newEmployee);
  //       console.log(employeeList);
  //       //   writeToFile("./dist/index.html", HTMLContent);
  //     })
  //     .catch((err) => console.error(err));
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
