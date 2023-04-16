import { readFileSync } from 'fs'

const json = JSON.parse(
  readFileSync(
    new URL('../package.json', import.meta.url)
  )
)

export default json
