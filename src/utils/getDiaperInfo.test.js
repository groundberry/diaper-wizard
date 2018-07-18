import {
  getDiaperSize,
  getDiaperColor,
} from './getDiaperInfo';

describe('getDiaperSize', () => {
  it('returns 0 when the number of days is <= 45', () => {
    const day = 25;
    expect(getDiaperSize(day)).toBe(0);
  });

  it('returns 1 when the number of days is <= 90', () => {
    const day = 90;
    expect(getDiaperSize(day)).toBe(1);
  });

  it('returns 2 when the number of days is <= 180', () => {
    const day = 180;
    expect(getDiaperSize(day)).toBe(2);
  });

  it('returns 3 when the number of days is <= 360', () => {
    const day = 360;
    expect(getDiaperSize(day)).toBe(3);
  });
});

describe('getDiaperColor', () => {
  it('returns "DiapersChart-nb" when the number of days is <= 45', () => {
    const day = 25;
    expect(getDiaperColor(day)).toBe('DiapersChart-nb');
  });

  it('returns "DiapersChart-one" when the number of days is <= 90', () => {
    const day = 90;
    expect(getDiaperColor(day)).toBe('DiapersChart-one');
  });

  it('returns "DiapersChart-two" when the number of days is <= 180', () => {
    const day = 180;
    expect(getDiaperColor(day)).toBe('DiapersChart-two');
  });

  it('returns "DiapersChart-three" when the number of days is <= 360', () => {
    const day = 360;
    expect(getDiaperColor(day)).toBe('DiapersChart-three');
  });
});
