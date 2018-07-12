import calculator from './calculator';

describe('calculator', () => {
  describe('starting on day 1', () => {
    it('returns 12 when the number of days is 3, starting on day 1', () => {
      const arrayOfDiapers = [2, 4, 6];
      expect(calculator(arrayOfDiapers)).toBe(12);
    });

    it('returns 21 when the number of days is 4, starting on day 1', () => {
      const arrayOfDiapers = [2, 4, 6, 11];
      expect(calculator(arrayOfDiapers)).toBe(23);
    });

    it('returns 1187 when the number of days is 10, starting on day 1', () => {
      const arrayOfDiapers = [2, 4, 6, 11, 11, 11, 11, 11, 11, 11];
      expect(calculator(arrayOfDiapers)).toBe(89);
    });
  });

  describe('starting on day 2', () => {
    it('returns 10 when the number of days is 2, starting on day 2', () => {
      const arrayOfDiapers = [4, 6];
      expect(calculator(arrayOfDiapers)).toBe(10);
    });
  });
});
