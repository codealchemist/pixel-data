import fs from 'fs'
import chalk from 'chalk'

function log () {
  console.log(chalk.gray('[ save ]'), ...arguments)
}

export default async function save ({ file, stream }) {
  try {
    const fileWriter = fs.createWriteStream(file)
    return stream.pipe(fileWriter)
  } catch (error) {
    log(chalk.red('ERROR'), error)
    process.exit()
  }
}
