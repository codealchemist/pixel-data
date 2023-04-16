import ndarray from 'ndarray'
import savePixels from 'save-pixels'
import chalk from 'chalk'
import getDimensions from '../util/get-dimensions.js'

function log () {
  console.log(chalk.gray('[ TextEncoder ]'), ...arguments)
}

export default async function textEncoder ({ text, debug }) {
  const totalChars = text.length
  log(`Encoding ${chalk.blue(totalChars)} chars`)
  const { width, height } = getDimensions(text.length)
  const totalPixels = width * height
  const channels = 4
  const capacity = totalPixels * channels
  const sizeStr = chalk.blue(`${width}x${height}px`)
  log(`Creating ${sizeStr} image, ${chalk.blue(totalPixels)} total pixels with capacity for ${chalk.blue(capacity)} chars`)

  const charCodesArray = new Uint8Array(capacity)
  for (let i = 0; i < totalChars; i++) {
    charCodesArray[i] = text.charCodeAt(i) || 0
  }
  
  const shape = [ width, height, channels]
  const stride = [channels, width * channels, 1]
  const nd = ndarray(charCodesArray, shape, stride)
  if (debug) log(chalk.magenta('NDARRAY'), nd)
  const imageStream = savePixels(nd, 'png')
  return imageStream
}
