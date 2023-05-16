const Employee = require('../lib/employee');

// describe('Employee class', () => {
//   it('Creates an object with name, id and email properties', () => {
//     const employee = new Employee('Lauren', 1, 'lauren@gmail.com');

//     expect(employee).toEqual(
//       expect.objectContaining([expect.objectContaining({ name: 'Lauren' })])
//     );
//   });

describe('Employee class', () => {
  describe('getName method', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('Lauren', 1, 'lauren@gmail.com');
      const name = employee.getName();
      expect(name).toBe('Lauren');
    });
  });
});
