export default function getNumberOfDays(startDate, endDate) {
  const selectedPeriod = Date.parse(endDate) - Date.parse(startDate);
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  return Math.round(selectedPeriod / days);
}
