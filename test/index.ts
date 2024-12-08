import { test } from '@substrate-system/tapzero'
import fixtures from '../dist/index.js'

test('import things', t => {
    t.ok(fixtures, 'should import the fixtures')
    t.ok(fixtures.leaves.torrent, 'object should be ok')
})
