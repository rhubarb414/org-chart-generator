const Engineer = require('../lib/engineer');

describe('Engineer class', () => {
  describe('getGithub method', () => {
    it('should return a url', () => {
      const engineer = new Engineer(
        'Lauren',
        1,
        'lauren@gmail.com',
        'github.com/rhubarb414'
      );
      const github = engineer.getGithub();
      expect(github).toBe('github.com/rhubarb414');
    });
  });

  describe('getRole method', () => {
    it('should return a string', () => {
      const engineer = new Engineer(
        'Lauren',
        1,
        'lauren@gmail.com',
        'github.com/rhubarb414'
      );
      const role = engineer.getRole();
      expect(role).toBe('Engineer');
    });
  });
});
