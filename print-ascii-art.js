import fs from 'fs'
import path from 'path'
import * as url from 'url'
import chalk from 'chalk'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const file = path.join(__dirname, 'ascii-art.txt')
const art = fs.readFileSync(file, 'utf8')
console.log(chalk.white(art))
