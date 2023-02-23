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
      if (typeof value !== number) {
        return "ID must be a number";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    name: "email",
    message: "Enter employee email",
  },
];

//create index.html
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("index.html successfully created.")
  );
}

function init() {
  const HTMLContent = generateHTML();
  writeToFile("./dist/index.html", HTMLContent);
}

// Function call to initialize app
init();
