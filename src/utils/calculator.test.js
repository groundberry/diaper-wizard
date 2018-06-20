import calculator from './calculator';

describe('calculator', () => {
  it('returns 12 when the number of days is 3', () => {
    const period = 3;
    expect(calculator(period)).toBe(12);
  });

  it('returns 21 when the number of days is 4', () => {
    const period = 4;
    expect(calculator(period)).toBe(21);
  });

  it('returns 1187 when the number of days is 111', () => {
    const period = 111;
    expect(calculator(period)).toBe(1198);
  });
});
