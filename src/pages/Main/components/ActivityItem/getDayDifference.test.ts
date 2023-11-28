import getDayDifference from './getDayDifference';

describe('getDayDifference', () => {
  test('should return 0 if the date is today', () => {
    const today = new Date();
    expect(getDayDifference(today)).toBe(0);
  });
  test('should return 1 if the date is yesterday', () => {
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    expect(getDayDifference(yesterday)).toBe(1);
  });
  test('should return 50 if the date is 50 days ago', () => {
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 50));
    expect(getDayDifference(yesterday)).toBe(50);
  });
});
