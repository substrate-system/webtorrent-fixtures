# webtorrent-fixtures
![tests](https://github.com/substrate-system/webtorrent-fixtures/actions/workflows/nodejs.yml/badge.svg)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/webtorrent-fixtures?cache-control=no-cache)](https://packagephobia.com/result?p=@substrate-system/webtorrent-fixtures)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

<details><summary><h2>Contents</h2></summary>
<!-- toc -->
</details>

## Sample torrent files for the WebTorrent test suite

Torrent and content test files. All files are Public Domain or Creative Commons.

## install

```sh
npm i -S @substrate-system/webtorrent-fixtures
```

## Usage

```js
import fixtures from '@substrate-system/webtorrent-fixtures'
console.log(fixtures.leaves)
```

## Inline
If you need to bundle your test files, use the inline version. Buffers are exposed as base64 strings.

```js
import fixtures from '@substrate-system/webtorrent-fixtures/inline'
```

### revive
To parse the JSON string, use the `revive` function. This will convert all `base64` string to Buffer objects.

```js
import base64Fixtures, { 
    revive
} from '@substrate-system/webtorrent-fixtures/inline'

const torrent = revive(base64Fixtures.leaves.parsedTorrent)
```

## License

MIT. Copyright (c) [Feross Aboukhadijeh](https://feross.org) and [WebTorrent, LLC](https://webtorrent.io).
