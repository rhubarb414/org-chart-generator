const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const employeeList = [];

const generateHTML = require("./src/generateHTML.js");
// const addEngineerHTML = require("./src/addEngineerHTML.js");
// const addInternHTML = require("./src/addInternHTML.js");

//~~~~~~~~~~~~ BEGIN Inquirer prompts ~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Manager questions for inquirer
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
        return "Username cannot be empty";
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

//questions for intern
const internQs = [
  {
    type: "input",
    name: "name",
    message: "Enter intern name",
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
    message: "Enter intern ID",
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
    message: "Enter intern email",
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
    name: "school",
    message: "Enter intern's school name",
    validate(value) {
      if (!value) {
        return "School name cannot be empty";
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

//~~~~~~~~~~~~ END Inquirer prompts ~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const addManager = () => {
  inquirer
    .prompt(managerQs)
    .then((responses) => {
      const newManager = new Manager(
        responses.name,
        responses.id,
        responses.email,
        responses.office
      );
      employeeList.push(newManager);
      console.log(employeeList); // delete
      generateMgrHTML(mgrArray);
      if (responses.addNew === "Yes") {
        createEngOrInt();
      } else {
        filterEmployees(); //later generateHTML
      }

      //   const HTMLContent = generateHTML(responses); // move
      //   writeToFile("./dist/index.html", HTMLContent); //move
    })
    .catch((err) => console.error(err));
};

const generateMgrHTML = (mgrArray) => {
  mgrArray.forEach((manager) => {
    console.log("manager = " + manager);
    generateHTML.addManagerHTML(manager);
  });
};
const createEngOrInt = () => {
  inquirer.prompt(employeePrompt).then((response) => {
    console.log("createEngOrInt response = " + response);
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
      const newEngineer = new Engineer(
        responses.name,
        responses.id,
        responses.email,
        responses.github
      );
      employeeList.push(newEngineer);
      console.log(employeeList); // delete
      if (responses.addNew === "Yes") {
        createEngOrInt();
      } else {
        filterEmployees(); //later generateHTML
      }
      //   generateMgrHTML(mgrArray);
      //   generateEngHTML(engArray);
    })
    .catch((err) => console.error(err));
};

const generateEngHTML = (engArray) => {
  engArray.forEach((engineer) => {
    console.log("engineer = " + engineer);
    generateHTML.addEngineerHTML(engineer);
  });
};
const addIntern = () => {
  inquirer
    .prompt(internQs)
    .then((responses) => {
      const newIntern = new Intern(
        responses.name,
        responses.id,
        responses.email,
        responses.school
      );
      employeeList.push(newIntern);
      console.log(employeeList); // delete
      if (responses.addNew === "Yes") {
        createEngOrInt();
      } else {
        filterEmployees(); //later generateHTML
      }
    })
    .catch((err) => console.error(err));
};

const generateIntHTML = (engArray) => {
  engArray.forEach((engineer) => {
    console.log("engineer = " + engineer);
    generateHTML.addInternHTML(engineer);
  });
};

//filter employee types
const mgrArray = [];
const engArray = [];
const intArray = [];

//comment out for now.. works though
// const filterEmployees = () => {
//   employeeList.forEach((employee) => {
//     if (employee.getRole() === "Manager") {
//       mgrArray.push(employee);
//     } else if (employee.getRole() === "Engineer") {
//       engArray.push(employee);
//     } else {
//       intArray.push(employee);
//     }
//   });
//   console.log(mgrArray);
//   console.log(engArray);
//   console.log(intArray);
// };

const filterEmployees = () => {
  employeeList.forEach((employee) => {
    if (employee.getRole() === "Manager") {
      generateHTML.addManagerHTML(employee);
    } else if (employee.getRole() === "Engineer") {
      generateHTML.addEngineerHTML(employee);
    } else {
      console.log(employee.getRole());
      generateHTML.addInternHTML(employee);
    }
  });
};
//create index.html
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("index.html successfully created.")
  );
}

function init() {
  addManager();
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
