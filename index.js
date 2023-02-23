const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const generateHTML = require("./src/generateHTML.js");

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
