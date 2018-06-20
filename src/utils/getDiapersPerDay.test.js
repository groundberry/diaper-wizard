import getDiapersPerDay from './getDiapersPerDay';

describe('getDiapersPerDay', () => {
  it('returns 2 when the number of days is 1', () => {
    const days = 1;
    expect(getDiapersPerDay(days)).toBe(2);
  });

  it('returns 4 when the number of days is 2', () => {
    const days = 2;
    expect(getDiapersPerDay(days)).toBe(4);
  });

  it('returns 6 when the number of days is 3', () => {
    const days = 3;
    expect(getDiapersPerDay(days)).toBe(6);
  });

  it('returns 9 when the number of days is 4', () => {
    const days = 4;
    expect(getDiapersPerDay(days)).toBe(9);
  });

  it('returns 11 when the number of days is 7', () => {
    const days = 7;
    expect(getDiapersPerDay(days)).toBe(11);
  });

  it('returns 9 when the number of days is 160', () => {
    const days = 160;
    expect(getDiapersPerDay(days)).toBe(9);
  });

  it('returns 8 when the number of days is 275', () => {
    const days = 275;
    expect(getDiapersPerDay(days)).toBe(8);
  });

  it('returns 8 when the number of days is 360', () => {
    const days = 360;
    expect(getDiapersPerDay(days)).toBe(8);
  });
});
