export const convertMilliseconds = (milliseconds: number) => {
  const totalSeconds = Math.floor(milliseconds / 1000)
  return { totalSeconds }
}
