# pixel-data

Encodes/decodes text from/to pixels.

Every pixel is composed of 4 channels:

- red
- green
- blue
- alpha

Every channel contains an int from 0 to 255.

Meaning we can easily save 1 char per channel / 4 chars per pixel 😎

## CLI install

`npm i --global pixel-data`

## CLI usage

### Encode

- Text: `pixel-data encode --text [text] --output [file.png]`
- Text file: `pixel-data encode --file [file.txt] [--output [file.png]]`
  - `--output` defaults to `[file.txt].png`

### Decode

`pixel-data decode [file.png] [--output [file.txt]]`

Note: `--output` defaults to `[file.png].txt`.

## Use it without installing

`pixel-data encode --text [text] --output [file.png]`

or

`npx pixel-data decode [file.png] [--output [file.txt]]`
