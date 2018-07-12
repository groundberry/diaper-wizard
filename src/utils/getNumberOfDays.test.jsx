import getNumberOfDays from './getNumberOfDays';

describe('getNumberOfDays', () => {
  it('returns 5 when there are 5 days of difference between dates', () => {
    const startDate = '2018-07-1';
    const endDate = '2018-07-6';
    expect(getNumberOfDays(startDate, endDate)).toBe(5);
  });
});
