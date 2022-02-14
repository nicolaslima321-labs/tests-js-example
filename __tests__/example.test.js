const divideByTwo = require('../index.js');

describe('General Context > divideByTwo', () => {
  describe('When number 10 is divided by 2', () => {
    it('results in 5', () => {
      const result = divideByTwo(10);
      expect(result).toBe(5);
    });
  });

  describe('Whe non numeric value is divided by 2', () => {
    it('results in NaN', () => {
      const result = divideByTwo('10,00 R$');
      expect(result).toBe(NaN);
    });
  });
});
