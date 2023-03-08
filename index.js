const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const employeeList = [];

const generateHTML = require("./src/generateHTML.js");

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
      if (responses.addNew === "Yes") {
        createEngOrInt();
      } else {
        filterEmployees();
        const HTMLContent = generateHTML.concatHTML();
        writeToFile("./dist/index.html", HTMLContent);
      }
    })
    .catch((err) => console.error(err));
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
      if (responses.addNew === "Yes") {
        createEngOrInt();
      } else {
        filterEmployees();
        const HTMLContent = generateHTML.concatHTML();
        writeToFile("./dist/index.html", HTMLContent);
      }
    })
    .catch((err) => console.error(err));
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

      if (responses.addNew === "Yes") {
        createEngOrInt();
      } else {
        filterEmployees();
        const HTMLContent = generateHTML.concatHTML();
        writeToFile("./dist/index.html", HTMLContent);
      }
    })
    .catch((err) => console.error(err));
};

// Inquirer section for asking whether to add new Engineer or Intern
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

// Calls getRole() object method to sort employees and generates page HTML
const filterEmployees = () => {
  employeeList.forEach((employee) => {
    if (employee.getRole() === "Manager") {
      generateHTML.addManagerHTML(employee);
    } else if (employee.getRole() === "Engineer") {
      generateHTML.addEngineerHTML(employee);
    } else {
      generateHTML.addInternHTML(employee);
    }
  });
};

// Create index.html
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("index.html successfully created.")
  );
}

function init() {
  addManager(); //Start by adding manager, other prompts will follow once this is called.
}

// Function call to initialize app
init();
