import fs from 'node:fs'
import path from 'path'
import { fileURLToPath } from 'node:url'
import parseTorrent from 'parse-torrent'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const args = process.argv.slice(2)
if (args.length < 1) throw new Error('Missing fixture file name')

const pathname = args[0]
const filename = pathname.split('/').pop()

// console.log('filename', filename)

// Read the file as a buffer
// console.log('full path', path.join(__dirname, '..', 'src', 'fixtures'))
const fixturePath = path.join(__dirname, '..', 'src', 'fixtures')
const buffer = fs.readFileSync(path.join(fixturePath, filename))

if (args.includes('--parse')) {
    const parsed = await parseTorrent(buffer)
    console.log(JSON.stringify(parsed, null, 2))
} else {
    // Convert the buffer to a base64 string
    const base64String = buffer.toString('base64')

    console.log(base64String)
}
