const Employee = require("./employee");

class Manager extends Employee {
  constructor(responses) {
    super(name, id, email);
    this.officeNumber = responses.officeNumber;
  }

  getOfficeNumber() {}
  getRole() {
    return "Manager";
  }
}
