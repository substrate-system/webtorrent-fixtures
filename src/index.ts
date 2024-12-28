// Torrent and content test files. Content is Public Domain or Creative Commons.
import fs from 'fs'
import path from 'path'
import parseTorrent, { toMagnetURI } from 'parse-torrent'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export type ParsedTorrent = {
    name:string;
    path?:string;
    announce:string|string[];
    private?:boolean;
    created:Date;
    createdBy:string;
    infoHash:string;
    infoBuffer:Uint8Array;
    infoHashBuffer:Uint8Array;
    magnetURI:string;
    urlList:string[];
    'creation date':number;
    'created by':string;
    comment:string|ArrayBufferView;
    length:number;
    files:(File[]|Blob[]) & {
        path:string;
        downloaded;
        done:boolean;
        name:string;
        length:number;
        offset:number;
    }[];
    info: {
        files:{ length:number; path?:string; 'path.utf-8'?:string }[];
        name:string;
        'piece length':number;
        pieces:any[];
        private?:boolean;
    };
    pieceLength:number;
    lastPieceLength:number;
    pieces:any[];
}

export const fixtures = {
    // Leaves of Grass, by Walt Whitman
    leaves: {
        contentPath: path.join(__dirname, 'fixtures', 'Leaves of Grass by Walt Whitman.epub'),
        torrentPath: path.join(__dirname, 'fixtures', 'leaves.torrent'),
        content: fs.readFileSync(path.join(__dirname, 'fixtures', 'Leaves of Grass by Walt Whitman.epub')),
        torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves.torrent')),
        parsedTorrent: await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves.torrent'))),
        magnetURI: toMagnetURI(await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves.torrent'))))
    },

    // Alice's Adventures in Wonderland, by Lewis Carroll
    alice: {
        contentPath: path.join(__dirname, 'fixtures', 'alice.txt'),
        torrentPath: path.join(__dirname, 'fixtures', 'alice.torrent'),
        content: fs.readFileSync(path.join(__dirname, 'fixtures', 'alice.txt')),
        torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'alice.torrent')),
        parsedTorrent: await parseTorrent(
            fs.readFileSync(path.join(__dirname, 'fixtures', 'alice.torrent'))
        ),
        magnetURI: toMagnetURI(
            await parseTorrent(
                fs.readFileSync(path.join(__dirname, 'fixtures', 'alice.torrent'))
            ))
    },

    // Folder which contains single file
    folder: {
        contentPath: path.join(__dirname, 'fixtures', 'folder'),
        torrentPath: path.join(__dirname, 'fixtures', 'folder.torrent'),
        torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'folder.torrent')),
        parsedTorrent: await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'folder.torrent'))),
        magnetURI: toMagnetURI(await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'folder.torrent'))))
    },

    // Folder which contains multiple files
    numbers: {
        contentPath: path.join(__dirname, 'fixtures', 'numbers'),
        torrentPath: path.join(__dirname, 'fixtures', 'numbers.torrent'),
        torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'numbers.torrent')),
        parsedTorrent: await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'numbers.torrent'))),
        magnetURI: toMagnetURI(await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'numbers.torrent'))))
    },

    // Folder which contains subfolders with multiple files
    lotsOfNumbers: {
        contentPath: path.join(__dirname, 'fixtures', 'lots-of-numbers'),
        torrentPath: path.join(__dirname, 'fixtures', 'lots-of-numbers.torrent'),
        torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'lots-of-numbers.torrent')),
        parsedTorrent: await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'lots-of-numbers.torrent'))),
        magnetURI: toMagnetURI(await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'lots-of-numbers.torrent'))))
    },

    // Big Buck Bunny, by Blender Foundation ("private" flag, "url-list" property, 434 MB)
    bunny: {
        torrentPath: path.join(__dirname, 'fixtures', 'bunny.torrent'),
        torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'bunny.torrent')),
        parsedTorrent: await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'bunny.torrent'))),
        magnetURI: toMagnetURI(await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'bunny.torrent'))))
    },

    // Sintel, by Blender Foundation (5.5 GB)
    sintel: {
        torrentPath: path.join(__dirname, 'fixtures', 'sintel.torrent'),
        torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'sintel.torrent')),
        parsedTorrent: await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'sintel.torrent'))),
        magnetURI: toMagnetURI(await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'sintel.torrent'))))
    },

    // Leaves of Grass, by Walt Whitman (only the metadata portion received via ut_metadata)
    leavesMetadata: {
        contentPath: path.join(__dirname, 'fixtures', 'Leaves of Grass by Walt Whitman.epub'),
        torrentPath: path.join(__dirname, 'fixtures', 'leaves-metadata.torrent'),
        content: fs.readFileSync(path.join(__dirname, 'fixtures', 'Leaves of Grass by Walt Whitman.epub')),
        torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-metadata.torrent')),
        parsedTorrent: await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-metadata.torrent'))),
        magnetURI: toMagnetURI(await parseTorrent(fs.readFileSync(path.join(__dirname, 'fixtures', 'leaves-metadata.torrent'))))
    },

    // Invalid .torrent file (missing `name` field)
    corrupt: {
        torrentPath: path.join(__dirname, 'fixtures', 'corrupt.torrent'),
        torrent: fs.readFileSync(path.join(__dirname, 'fixtures', 'corrupt.torrent'))
    },

    // ip-set formatted files (i.e. blocklists)
    blocklist: {
        path: path.join(__dirname, 'fixtures', 'blocklist.txt'),
        gzipPath: path.join(__dirname, 'fixtures', 'blocklist.txt.gz')
    }
}

export default fixtures
