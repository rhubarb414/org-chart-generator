// class Employee {
//   constructor(name, id, email) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//   }
//   getName() {
//     return this.name;
//   }
//   getID() {
//     return this.id;
//   }
//   getEmail() {
//     return this.email;
//   }
// }

const inquirer = require("inquirer");

// const employeeQs = [
//   {
//     type: "input",
//     name: "name",
//     message: "Enter manager name",
//     validate(value) {
//       if (!value) {
//         return "Manager name cannot be empty";
//       } else {
//         return true;
//       }
//     },
//   },
//   {
//     type: "input",
//     name: "id",
//     message: "Enter manager ID",
//     validate(value) {
//       if (!value) {
//         return "ID cannot be empty";
//       } else {
//         return true;
//       }
//     },
//   },

//   {
//     type: "input",
//     name: "email",
//     message: "Enter manager email",
//     validate(value) {
//       if (!value) {
//         return "Email cannot be empty";
//       } else {
//         return true;
//       }
//     },
//   },
// ];

// const employeeList = [];

class Employee {
  constructor() {
    this.name = "";
    this.id = "";
    this.email = "";
  }
  getName() {
    console.log("getName called");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter employee name",
          validate(value) {
            if (!value) {
              return "Employee name cannot be empty";
            } else {
              return true;
            }
          },
        },
      ])
      .then((response) => {
        this.name = response;
        console.log(this);
      })
      .catch((err) => console.error(err));
  }
  getID() {
    inquirer
      .prompt([
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
      ])
      .then((response) => {
        this.id = response;
      })
      .catch((err) => console.log(err));
  }
  getEmail() {}
  getRole() {
    return "Employee";
  }
}

// const newEmployee = new Employee();
// newEmployee
//   .getName()
//   .then(() => {
//     console.log("got to then");
//     newEmployee.getID();
//   })
//   .catch((err) => console.error("Promise rejected:", err));

const createEmployee = async () => {
  const newEmployee = new Employee();
  await newEmployee.getName();
  console.log("worked?");
};

createEmployee();

module.exports = Employee;

// testing getID as a function.
//seem to work.

// const getID = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "id",
//         message: "Enter manager ID",
//         validate(value) {
//           if (!value) {
//             return "ID cannot be empty";
//           } else {
//             return true;
//           }
//         },
//       },
//     ])
//     .then((response) => {
//       this.id = response;
//     })
//     .catch((err) => console.log(err));
// };

// getID();
