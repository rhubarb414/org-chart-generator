const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const generateHTML = require("./src/generateHTML.js");

//array of questions for inquirer
const questions = [
  {
    type: "input",
    name: "name",
    message: "Enter employee name",
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
    message: "Enter employee ID",
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
    name: "email",
    message: "Enter employee email",
    validate(value) {
      if (!value) {
        return "Name cannot be empty";
      } else {
        return true;
      }
    },
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((responses) => {
      const HTMLContent = generateHTML(responses);
      writeToFile("./dist/index.html", HTMLContent);
    })
    .catch((err) => console.error(err));
}

//create index.html
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("index.html successfully created.")
  );
}

// Function call to initialize app
init();
