import getDiapersPerDay from './getDiapersPerDay';

export default function getArrayOfDiapers(startingDay, numberOfDays) {
  const result = [];
  const period = startingDay + numberOfDays;

  for (let i = startingDay; i < period; i += 1) {
    result.push(getDiapersPerDay(i));
  }
  return result;
}
