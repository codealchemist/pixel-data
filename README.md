# pixel-text

Encodes input data (only text for now) into pixels.
Every pixel is composed of 4 channels:

- red
- green
- blue
- alpha

Every channel contains an int from 0 to 255.
Meaning we can easily save 1 char per channel / 4 chars per pixel 😎

## CLI install

`npm i --global pixel-text`

## CLI usage

### Encode

- Text: `pixel-text encode --text [text] --output [file.png]`
- Text file: `pixel-text encode --file [file.txt] [--output [file.png]]`
  - `--output` defaults to `[file.txt].png`

### Decode

`pixel-text decode [file.png] [--output [file.txt]]`

Note: `--output` defaults to `[file.png].txt`.

## Use it without installing

`pixel-text encode --text [text] --output [file.png]`

or

`npx pixel-text decode [file.png] [--output [file.txt]]`
