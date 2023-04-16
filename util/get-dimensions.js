export default function getDimensions (length) {
  let width = Math.sqrt(length/4)
  let height = Math.ceil(width)
  if (height > width) {
    width = Math.round(width)
  }
  return { width, height }
}
