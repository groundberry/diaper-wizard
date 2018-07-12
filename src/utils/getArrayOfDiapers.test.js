import getArrayOfDiapers from './getArrayOfDiapers';

describe('getArrayOfDiapers', () => {
  describe('starting on day 1', () => {
    it('returns an array with the number of diapers needed for each day', () => {
      const startingDay = 1;
      const numberOfDays = 3;
      const diapers = [2, 4, 6];
      expect(getArrayOfDiapers(startingDay, numberOfDays)).toEqual(diapers);
    });
  });

  describe('starting on day 2', () => {
    it('returns an array with the number of diapers needed for each day', () => {
      const startingDay = 2;
      const numberOfDays = 3;
      const diapers = [4, 6, 9];
      expect(getArrayOfDiapers(startingDay, numberOfDays)).toEqual(diapers);
    });
  });
});
