import fs from 'fs/promises'
import chalk from 'chalk'
import textEncoder from './text-encoder.js'

function log () {
  console.log(chalk.gray('[ TextFileEncoder ]'), ...arguments)
}

export default async function fileEncoder ({ file, debug }) {
  log(`Reading ${chalk.yellow(file)}`)
  let data = await fs.readFile(file, 'utf-8')
  data = data.toString().trim()
  if (!data?.length) {
    log(chalk.red('Empty data'))
    process.exit()
  }
  return textEncoder({ text: data, debug })
}
