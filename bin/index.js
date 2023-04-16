#!/usr/bin/env node
import chalk from 'chalk'
import encode from '../encode.js'
import decode from '../decode.js'
import '../print-ascii-art.js'
import info from '../util/get-package-info.js'

const args = process.argv.slice(2)
const [method] = args

function log () {
  console.log(chalk.gray('[ pixel-data ]'), ...arguments)
}
log(`v${info.version}`)

const methodsMap = {
  encode,
  decode
}

const methodRunner = methodsMap[method]
if (!methodRunner) {
  console.log('USAGE:')
  console.log(chalk.gray(`    pixel-text [encode|decode] [args]
    ${chalk.white('\nTo get additional help write:')}
    - pixel-text encode
    or
    - pixel-text decode
  `))
  process.exit()
}

await methodRunner()
