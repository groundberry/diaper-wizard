import getDiapersPerDay from './getDiapersPerDay';

export default function calculator(period) {
  let result = 0;

  for (let i = 0; i <= period; i += 1) {
    result += getDiapersPerDay(i);
  }

  return result;
}
