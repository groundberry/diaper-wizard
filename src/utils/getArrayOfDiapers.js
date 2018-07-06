import getDiapersPerDay from './getDiapersPerDay';

export default function getArrayOfDiapers(days) {
  const result = [];

  for (let i = 1; i <= days; i += 1) {
    result.push(getDiapersPerDay(i));
  }

  return result;
}
