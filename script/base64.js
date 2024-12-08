import fs from 'node:fs'
import { toString } from 'uint8arrays'
import path from 'path'
import { fileURLToPath } from 'node:url'
import parseTorrent from 'parse-torrent'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Call this via the CLI to get the fixture as a base64 string.
 */

const args = process.argv.slice(2)
if (args.length < 1) throw new Error('Missing fixture file name')

const pathname = args[0]
const filename = pathname.split('/').pop()

// console.log('filename', filename)

// Read the file as a buffer
// console.log('full path', path.join(__dirname, '..', 'src', 'fixtures'))
const fixturePath = path.join(__dirname, '..', 'src', 'fixtures')
const buffer = fs.readFileSync(path.join(fixturePath, filename))

export const keys = ['infoHashBuffer', 'infoBuffer']

if (args.includes('--parse')) {
    const parsed = await parseTorrent(buffer)
    console.log('ppppppppppppppppppppppppp', parsed)
    // parsed is now an object
    console.log(JSON.stringify(parsed, function (k, v) {
        // stringify it, and convert buffers to `base64` strings
        // the top level `info` key includes some buffers
        if (k.includes('name')) {
            if (v instanceof Uint8Array) return toString(v, 'base64')
        }

        // the top level `info` key includes some buffers
        if (k.includes('pieces')) {
            if (v instanceof Uint8Array) return toString(v, 'base64')
        }

        if (k.toLowerCase().includes('buffer')) {
            return toString(v, 'base64')
        }

        return v
    }, 2))
} else {
    const base64String = buffer.toString('base64')
    console.log(base64String)
}
