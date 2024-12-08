import { test } from '@substrate-system/tapzero'
import fixtures from '../dist/index.js'
import base64Fixtures from '../dist/base64.js'

test('import things', t => {
    t.ok(fixtures, 'should import the fixtures')
    t.ok(fixtures.leaves.torrent, 'object should be ok')
})

test('inline fixtures', t => {
    t.equal(typeof base64Fixtures.leaves.torrent, 'string',
        'should expose the torrent as a base64 string')
})
