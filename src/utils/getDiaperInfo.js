export function getDiaperSize(day) {
  let size;

  if (day <= 45) {
    size = 0;
  } else if (day <= 90) {
    size = 1;
  } else if (day <= 180) {
    size = 2;
  } else if (day <= 360) {
    size = 3;
  }
  return size;
}

export function getDiaperColor(day) {
  let color;

  if (getDiaperSize(day) === 0) {
    color = 'DiapersChart-nb';
  } else if (getDiaperSize(day) === 1) {
    color = 'DiapersChart-one';
  } else if (getDiaperSize(day) === 2) {
    color = 'DiapersChart-two';
  } else if (getDiaperSize(day) === 3) {
    color = 'DiapersChart-three';
  }

  return color;
}
