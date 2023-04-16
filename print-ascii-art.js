import fs from 'fs'
import chalk from 'chalk'

const file = 'ascii-art.txt'
const art = fs.readFileSync(file, 'utf8')
console.log(chalk.white(art))
