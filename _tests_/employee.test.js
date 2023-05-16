const Employee = require('../lib/employee');

describe('Employee class', () => {
  describe('getName method', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('Lauren', 1, 'lauren@gmail.com');
      const name = employee.getName();
      expect(name).toBe('Lauren');
    });
  });

  describe('getID method', () => {
    it('should return a number', () => {
      const employee = new Employee('Lauren', 1, 'lauren@gmail.com');
      const id = employee.getID();
      expect(id).toEqual(1);
    });
  });

  describe('getEmail method', () => {
    it('should return a string', () => {
      const employee = new Employee('Lauren', 1, 'lauren@gmail.com');
      const email = employee.getEmail();
      expect(email).toBe('lauren@gmail.com');
    });
  });

  describe('getRole method', () => {
    it('should return a string', () => {
      const employee = new Employee('Lauren', 1, 'lauren@gmail.com');
      const role = employee.getRole();
      expect(role).toBe('Employee');
    });
  });
});
