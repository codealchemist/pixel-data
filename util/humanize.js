function magnitude (value) {
  let mag = 0

  while(value > 1) {
    mag++
    value = value / 10
  }

  return mag
}

export default function humanize (value, minMagnitude = 3) {
  if (value === 0) return 0
  if (!value) return
  const mag = magnitude(value)

  if (mag <= minMagnitude) return value

  if (mag > 3 && mag <= 6) {
    return value.toString().substr(0, mag - 3) + "K"
  }

  if (mag > 6 && mag <= 9) {
    return value.toString().substr(0, mag - 6) + "M"
  }

  if (mag > 9 && mag <= 12) {
    return value.toString().substr(0, mag - 9) + "B"
  }

  if (mag > 12 && mag <= 15) {
    return value.toString().substr(0, mag - 12) + "T"
  }

  return value
}
