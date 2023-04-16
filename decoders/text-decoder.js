import fs from 'fs'
import chalk from 'chalk'

function log () {
  console.log(chalk.gray('[ text-decoder ]'), ...arguments)
}

export default function textDecoder ({ pixels, file, output }) {
  const outputFile = output || `${file}.txt`
  const fileWriter = fs.createWriteStream(outputFile)
  pixels.data.forEach(charCode => {
    if (!charCode) return
    const char = String.fromCharCode(charCode)
    fileWriter.write(char)
  })
  fileWriter.end()
  log(`Text written to ${chalk.yellow(outputFile)} 🎉`)
}
