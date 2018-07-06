import getArrayOfDiapers from './getArrayOfDiapers';

describe('getArrayOfDiapers', () => {
  it('returns an array with the number of diapers needed for each day', () => {
    const days = 3;
    const diapers = [2, 4, 6];
    expect(getArrayOfDiapers(days)).toEqual(diapers);
  });
});
