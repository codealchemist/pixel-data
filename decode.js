import getPixels from 'get-pixels'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import chalk from 'chalk'
import humanize from './util/humanize.js'
import textDecoder from './decoders/text-decoder.js'

function log () {
  console.log(chalk.gray('[ decode ]'), ...arguments)
}

const args = yargs(hideBin(process.argv)).argv

function usage () {
  console.log(`
    USAGE:
      node decode.js [image-file] --output [text-file]
  
    Note:
      --output defaults to: [image-file].txt
    
    Example:
      node decode.js some-image.png
      node decode.js some-image.png --output rock.txt
    `)
    process.exit()
}

export default async function decode () {
  if (!args?._?.length) {
    usage()
  }
  
  const [method, file] = args._
  const { output, debug } = args

  if (!method || !file) {
    usage()
  }

  getPixels(file, (err, pixels) => {
    if (err) {
      log('ERROR:', err)
      process.exit()
    }
  
    const totalPixels = humanize(pixels.data?.length, 4) || 'NA'
    log(`Got ${chalk.blue(totalPixels)} pixels from ${chalk.yellow(file)}. Decoding...`)
    if (debug) log(pixels)
    textDecoder({ pixels, file, output })
  })
}
