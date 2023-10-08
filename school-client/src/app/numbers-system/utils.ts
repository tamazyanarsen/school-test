export function randomIntToString(min: number, max: number, radix: number) {
  return (Math.round(Math.random() * (max - min) + min)).toString(radix)
}
