export const formatTime = (time: number): string => {
  return time < 10 ? `0${time}` : time.toString()
}
