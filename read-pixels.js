import getPixels from 'get-pixels'

const args = process.argv.slice(2)

if (!args?.length) {
  console.log(`
  USAGE: node read-pixels.js [image-file]
  Example: node read-pixels.js some-image.png
  `)
  process.exit()
}

const [file] = args
getPixels(file, (err, pixels) => {
  if (err) {
    console.log('ERROR:', err)
    process.exit()
  }

  console.log('Got pixels!')
  console.log(pixels)
  console.log()
})
