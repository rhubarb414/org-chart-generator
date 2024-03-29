const Manager = require('../lib/manager');

describe('Manager class', () => {
  describe('getOfficeNumber method', () => {
    it('should return a number', () => {
      const manager = new Manager('Lauren', 1, 'lauren@gmail.com', 666);
      const officeNumber = manager.getOfficeNumber();
      expect(officeNumber).toEqual(666);
    });
  });

  describe('getRole method', () => {
    it('should return a string', () => {
      const manager = new Manager('Lauren', 1, 'lauren@gmail.com', 666);
      const role = manager.getRole();
      expect(role).toBe('Manager');
    });
  });
});
