export function fearDeclination(number: number): string {
  if (number % 100 >= 11 && number % 100 <= 14) {
    return `страхов`
  }

  if (number % 10 === 1) {
    return `страх`
  }

  if (number % 10 >= 2 && number % 10 <= 4) {
    return `страха`
  }

  return `страхов`
}
