export default function calculator(arrayOfDiapers) {
  let result = 0;
  for (let i = 0; i < arrayOfDiapers.length; i += 1) {
    result += arrayOfDiapers[i];
  }

  return result;
}
