import { test } from '@substrate-system/tapzero'
import fixtures from '../dist/index.js'
import base64Fixtures, { _revive, revive } from '../dist/base64.js'

test('import things', t => {
    t.ok(fixtures, 'should import the fixtures')
    t.ok(fixtures.leaves.torrent, 'object should be ok')
})

test('inline fixtures', t => {
    t.equal(typeof base64Fixtures.leaves.torrent, 'string',
        'should expose the torrent as a base64 string')
})

test('revive the fixture', t => {
    console.log('the json.....', base64Fixtures.leaves.parsedTorrent)
    const obj = JSON.parse(base64Fixtures.leaves.parsedTorrent, _revive)
    console.log('the object', obj)
    t.ok(obj, 'should return something')

    t.ok(obj.info.name instanceof Uint8Array, 'should revive to binary')
})

test('revive the fixture from a string', t => {
    const data = revive(base64Fixtures.leaves.parsedTorrent)
    t.ok(data.info.name instanceof Uint8Array, 'should revive the object')
})
