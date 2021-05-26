const convertSecToTimeString = seconds => {
  const hour = Math.floor(seconds / 3600)
  const min = Math.floor((seconds % 3600) / 60)
  const sec = (seconds % 3600) % 60

  const timeString = [hour, min, sec]
    .map(unit => String(unit).padStart(2, "0"))
    .join(":")

  return timeString
}

export default convertSecToTimeString
