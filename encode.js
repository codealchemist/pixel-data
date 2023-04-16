import fs from 'fs'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import chalk from 'chalk'
import textFileEncoder from './encoders/text-file-encoder.js'
import textEncoder from './encoders/text-encoder.js'
import save from './util/save.js'

const args = yargs(hideBin(process.argv)).argv

function log () {
  console.log(chalk.gray('[ encode ]'), ...arguments)
}

function showUsageAndExit () {
  console.log(`
  USAGE:
    node encode.js --text [text] --output [image]
    node encode.js --file [text-file] --output [image]

    --output can be omitted when using --file, it will default to:
    [source-file].png
  
  Examples:
    node encode.js --text "Let's rock!" --output rock.png
    node encode.js --file rock.txt --output rock.png
  `)
  process.exit()
}

function exitError() {
  console.log(chalk.red('ERROR:'), ...arguments)
  process.exit()
}

export default async function encode () {
  if (!args || !Object.keys(args)?.length) {
    showUsageAndExit()
  }
  
  const { file, text, output, debug } = args
  
  //------------------------------------------------------------------------
  // Encode text file.
  if (file) {
    // Validate file.
    if (!fs.existsSync(file)) {
      exitError(`Input file does not exist: ${input}`)
    }
  
    const imageStream = await textFileEncoder({ file, debug })
    const outputFile = output || `${file}.png`
    log(`Writing ${chalk.yellow(outputFile)}`)
    await save({ file: outputFile, stream: imageStream })
    log('Done 🎉')
    process.exit()
  }
  //------------------------------------------------------------------------
  // Encode text.
  if (!text || !output) {
    showUsageAndExit()
  }
  log('text encoder...')
  const imageStream = await textEncoder({ text, debug })
  log(`Writing ${chalk.yellow(output)}`)
  await save({ file: output, stream: imageStream })
  log('Done 🎉')
  //------------------------------------------------------------------------
}
