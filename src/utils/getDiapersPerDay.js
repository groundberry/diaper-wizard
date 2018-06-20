export default function getDiapersPerDay(day) {
  let result = 0;

  if (day === 1) {
    result = 2;
  } else if (day === 2) {
    result = 4;
  } else if (day === 3) {
    result = 6;
  } else if (day === 4) {
    result = 9;
  } else if (day >= 5 && day <= 150) {
    result = 11;
  } else if (day > 150 && day <= 270) {
    result = 9;
  } else if (day > 270 && day <= 360) {
    result = 8;
  }

  return result;
}
