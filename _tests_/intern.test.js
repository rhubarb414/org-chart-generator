const Intern = require('../lib/intern');

describe('Intern class', () => {
  describe('getSchool method', () => {
    it('should return a string', () => {
      const intern = new Intern('Lauren', 1, 'lauren@gmail.com', 'Berkeley');
      const schoolName = intern.getSchool();
      expect(schoolName).toBe('Berkeley');
    });
  });

  describe('getRole method', () => {
    it('should return a string', () => {
      const intern = new Intern('Lauren', 1, 'lauren@gmail.com', 'Berkeley');
      const role = intern.getRole();
      expect(role).toBe('Intern');
    });
  });
});
