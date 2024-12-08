// Torrent and content test files. Content is Public Domain or Creative Commons.
import path from 'path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Everything is inline, so you can bundle this file.
 *
 * __convert to buffer__
 * ```js
 * const buffer = Buffer.from(base64String, "base64");
 * ```
 */
export const fixtures = {
    leaves: {
        torrent: 'ZDEwOmNyZWF0ZWQgYnkxMzp1VG9ycmVudC8zMzAwMTM6Y3JlYXRpb24gZGF0ZWkxMzc1MzYzNjY2ZTg6ZW5jb2Rpbmc1OlVURi04NDppbmZvZDY6bGVuZ3RoaTM2MjAxN2U0Om5hbWUzNjpMZWF2ZXMgb2YgR3Jhc3MgYnkgV2FsdCBXaGl0bWFuLmVwdWIxMjpwaWVjZSBsZW5ndGhpMTYzODRlNjpwaWVjZXM0NjA6H5w/Wb7sB5cV7FMyS96FaeSgtOvsQjB9TOVVe105ZMXvVdNUz0puzHvxvK950R+l4L4GWTyPqvwMK6LPdtccWwFSayMAf56ZKb6vxRUeZREJMaG0TCG/Hmi5E4+QSV5pDbxV9XLkwpRMus8m5rOuinIp2IqvoF9h6q5qvz8Hy225Z3zGre1N05heRYYnVn+nY58GX3GxiVQwSspjZnKeC0dz13roDKqWpSSATf5Lm9PervmZyd1RAnRnUZ1eslYa4swBRn3l9kMKYLy6JHl2ku+odw0j3wqDDZHLNbNAeoi6oFkNyMmqahIPJ0Nn3Nhn6I6DOMVyoG48gBsp9RnfUys+dvZwz2ruUxB/PTk3hIP2nPgPpWix6sU7UGFZ6YjYvBaSLRJdd9gD1lLDyjBwwW7tkXKrUG0g5SLqPxq2dLP5I9dv6PRP8y43LDs3ZWTG+18NvlIWTwNin9EyJja6uywBS32uWC2kE2OWUmHmzhK0NwHwqMntFSCnDroARACiZ3ZfbT3Vx761vTx1898qVFYKYYARR/pOx89WjnA6ywTlYQpNVtzCQtAyk+lEbPXkV9jrPZWI/ZDGmN6bDa2SmAkGwCbYwUCPoI/k7GVl',
        parsedTorrent: parsedTorrent(),
        torrentPath: path.join(__dirname, 'fixtures', 'leaves.torrent'),
    }
}

export default fixtures

function parsedTorrent () {
    return {
        info: {
            length: 362017,
            name: {
                0: 76,
                1: 101,
                2: 97,
                3: 118,
                4: 101,
                5: 115,
                6: 32,
                7: 111,
                8: 102,
                9: 32,
                10: 71,
                11: 114,
                12: 97,
                13: 115,
                14: 115,
                15: 32,
                16: 98,
                17: 121,
                18: 32,
                19: 87,
                20: 97,
                21: 108,
                22: 116,
                23: 32,
                24: 87,
                25: 104,
                26: 105,
                27: 116,
                28: 109,
                29: 97,
                30: 110,
                31: 46,
                32: 101,
                33: 112,
                34: 117,
                35: 98
            },
            'piece length': 16384,
            pieces: {
                0: 31,
                1: 156,
                2: 63,
                3: 89,
                4: 190,
                5: 236,
                6: 7,
                7: 151,
                8: 21,
                9: 236,
                10: 83,
                11: 50,
                12: 75,
                13: 222,
                14: 133,
                15: 105,
                16: 228,
                17: 160,
                18: 180,
                19: 235,
                20: 236,
                21: 66,
                22: 48,
                23: 125,
                24: 76,
                25: 229,
                26: 85,
                27: 123,
                28: 93,
                29: 57,
                30: 100,
                31: 197,
                32: 239,
                33: 85,
                34: 211,
                35: 84,
                36: 207,
                37: 74,
                38: 110,
                39: 204,
                40: 123,
                41: 241,
                42: 188,
                43: 175,
                44: 121,
                45: 209,
                46: 31,
                47: 165,
                48: 224,
                49: 190,
                50: 6,
                51: 89,
                52: 60,
                53: 143,
                54: 170,
                55: 252,
                56: 12,
                57: 43,
                58: 162,
                59: 207,
                60: 118,
                61: 215,
                62: 28,
                63: 91,
                64: 1,
                65: 82,
                66: 107,
                67: 35,
                68: 0,
                69: 127,
                70: 158,
                71: 153,
                72: 41,
                73: 190,
                74: 175,
                75: 197,
                76: 21,
                77: 30,
                78: 101,
                79: 17,
                80: 9,
                81: 49,
                82: 161,
                83: 180,
                84: 76,
                85: 33,
                86: 191,
                87: 30,
                88: 104,
                89: 185,
                90: 19,
                91: 143,
                92: 144,
                93: 73,
                94: 94,
                95: 105,
                96: 13,
                97: 188,
                98: 85,
                99: 245,
                100: 114,
                101: 228,
                102: 194,
                103: 148,
                104: 76,
                105: 186,
                106: 207,
                107: 38,
                108: 230,
                109: 179,
                110: 174,
                111: 138,
                112: 114,
                113: 41,
                114: 216,
                115: 138,
                116: 175,
                117: 160,
                118: 95,
                119: 97,
                120: 234,
                121: 174,
                122: 106,
                123: 191,
                124: 63,
                125: 7,
                126: 203,
                127: 109,
                128: 185,
                129: 103,
                130: 124,
                131: 198,
                132: 173,
                133: 237,
                134: 77,
                135: 211,
                136: 152,
                137: 94,
                138: 69,
                139: 134,
                140: 39,
                141: 86,
                142: 127,
                143: 167,
                144: 99,
                145: 159,
                146: 6,
                147: 95,
                148: 113,
                149: 177,
                150: 137,
                151: 84,
                152: 48,
                153: 74,
                154: 202,
                155: 99,
                156: 102,
                157: 114,
                158: 158,
                159: 11,
                160: 71,
                161: 115,
                162: 215,
                163: 122,
                164: 232,
                165: 12,
                166: 170,
                167: 150,
                168: 165,
                169: 36,
                170: 128,
                171: 77,
                172: 254,
                173: 75,
                174: 155,
                175: 211,
                176: 222,
                177: 174,
                178: 249,
                179: 153,
                180: 201,
                181: 221,
                182: 81,
                183: 2,
                184: 116,
                185: 103,
                186: 81,
                187: 157,
                188: 94,
                189: 178,
                190: 86,
                191: 26,
                192: 226,
                193: 204,
                194: 1,
                195: 70,
                196: 125,
                197: 229,
                198: 246,
                199: 67,
                200: 10,
                201: 96,
                202: 188,
                203: 186,
                204: 36,
                205: 121,
                206: 118,
                207: 146,
                208: 239,
                209: 168,
                210: 119,
                211: 13,
                212: 35,
                213: 223,
                214: 10,
                215: 131,
                216: 13,
                217: 145,
                218: 203,
                219: 53,
                220: 179,
                221: 64,
                222: 122,
                223: 136,
                224: 186,
                225: 160,
                226: 89,
                227: 13,
                228: 200,
                229: 201,
                230: 170,
                231: 106,
                232: 18,
                233: 15,
                234: 39,
                235: 67,
                236: 103,
                237: 220,
                238: 216,
                239: 103,
                240: 232,
                241: 142,
                242: 131,
                243: 56,
                244: 197,
                245: 114,
                246: 160,
                247: 110,
                248: 60,
                249: 128,
                250: 27,
                251: 41,
                252: 245,
                253: 25,
                254: 223,
                255: 83,
                256: 43,
                257: 62,
                258: 118,
                259: 246,
                260: 112,
                261: 207,
                262: 106,
                263: 238,
                264: 83,
                265: 16,
                266: 127,
                267: 61,
                268: 57,
                269: 55,
                270: 132,
                271: 131,
                272: 246,
                273: 156,
                274: 248,
                275: 15,
                276: 165,
                277: 104,
                278: 177,
                279: 234,
                280: 197,
                281: 59,
                282: 80,
                283: 97,
                284: 89,
                285: 233,
                286: 136,
                287: 216,
                288: 188,
                289: 22,
                290: 146,
                291: 45,
                292: 18,
                293: 93,
                294: 119,
                295: 216,
                296: 3,
                297: 214,
                298: 82,
                299: 195,
                300: 202,
                301: 48,
                302: 112,
                303: 193,
                304: 110,
                305: 237,
                306: 145,
                307: 114,
                308: 171,
                309: 80,
                310: 109,
                311: 32,
                312: 229,
                313: 34,
                314: 234,
                315: 63,
                316: 26,
                317: 182,
                318: 116,
                319: 179,
                320: 249,
                321: 35,
                322: 215,
                323: 111,
                324: 232,
                325: 244,
                326: 79,
                327: 243,
                328: 46,
                329: 55,
                330: 44,
                331: 59,
                332: 55,
                333: 101,
                334: 100,
                335: 198,
                336: 251,
                337: 95,
                338: 13,
                339: 190,
                340: 82,
                341: 22,
                342: 79,
                343: 3,
                344: 98,
                345: 159,
                346: 209,
                347: 50,
                348: 38,
                349: 54,
                350: 186,
                351: 187,
                352: 44,
                353: 1,
                354: 75,
                355: 125,
                356: 174,
                357: 88,
                358: 45,
                359: 164,
                360: 19,
                361: 99,
                362: 150,
                363: 82,
                364: 97,
                365: 230,
                366: 206,
                367: 18,
                368: 180,
                369: 55,
                370: 1,
                371: 240,
                372: 168,
                373: 201,
                374: 237,
                375: 21,
                376: 32,
                377: 167,
                378: 14,
                379: 186,
                380: 0,
                381: 68,
                382: 0,
                383: 162,
                384: 103,
                385: 118,
                386: 95,
                387: 109,
                388: 61,
                389: 213,
                390: 199,
                391: 190,
                392: 181,
                393: 189,
                394: 60,
                395: 117,
                396: 243,
                397: 223,
                398: 42,
                399: 84,
                400: 86,
                401: 10,
                402: 97,
                403: 128,
                404: 17,
                405: 71,
                406: 250,
                407: 78,
                408: 199,
                409: 207,
                410: 86,
                411: 142,
                412: 112,
                413: 58,
                414: 203,
                415: 4,
                416: 229,
                417: 97,
                418: 10,
                419: 77,
                420: 86,
                421: 220,
                422: 194,
                423: 66,
                424: 208,
                425: 50,
                426: 147,
                427: 233,
                428: 68,
                429: 108,
                430: 245,
                431: 228,
                432: 87,
                433: 216,
                434: 235,
                435: 61,
                436: 149,
                437: 136,
                438: 253,
                439: 144,
                440: 198,
                441: 152,
                442: 222,
                443: 155,
                444: 13,
                445: 173,
                446: 146,
                447: 152,
                448: 9,
                449: 6,
                450: 192,
                451: 38,
                452: 216,
                453: 193,
                454: 64,
                455: 143,
                456: 160,
                457: 143,
                458: 228,
                459: 236
            }
        },
        infoBuffer: {
            0: 100,
            1: 54,
            2: 58,
            3: 108,
            4: 101,
            5: 110,
            6: 103,
            7: 116,
            8: 104,
            9: 105,
            10: 51,
            11: 54,
            12: 50,
            13: 48,
            14: 49,
            15: 55,
            16: 101,
            17: 52,
            18: 58,
            19: 110,
            20: 97,
            21: 109,
            22: 101,
            23: 51,
            24: 54,
            25: 58,
            26: 76,
            27: 101,
            28: 97,
            29: 118,
            30: 101,
            31: 115,
            32: 32,
            33: 111,
            34: 102,
            35: 32,
            36: 71,
            37: 114,
            38: 97,
            39: 115,
            40: 115,
            41: 32,
            42: 98,
            43: 121,
            44: 32,
            45: 87,
            46: 97,
            47: 108,
            48: 116,
            49: 32,
            50: 87,
            51: 104,
            52: 105,
            53: 116,
            54: 109,
            55: 97,
            56: 110,
            57: 46,
            58: 101,
            59: 112,
            60: 117,
            61: 98,
            62: 49,
            63: 50,
            64: 58,
            65: 112,
            66: 105,
            67: 101,
            68: 99,
            69: 101,
            70: 32,
            71: 108,
            72: 101,
            73: 110,
            74: 103,
            75: 116,
            76: 104,
            77: 105,
            78: 49,
            79: 54,
            80: 51,
            81: 56,
            82: 52,
            83: 101,
            84: 54,
            85: 58,
            86: 112,
            87: 105,
            88: 101,
            89: 99,
            90: 101,
            91: 115,
            92: 52,
            93: 54,
            94: 48,
            95: 58,
            96: 31,
            97: 156,
            98: 63,
            99: 89,
            100: 190,
            101: 236,
            102: 7,
            103: 151,
            104: 21,
            105: 236,
            106: 83,
            107: 50,
            108: 75,
            109: 222,
            110: 133,
            111: 105,
            112: 228,
            113: 160,
            114: 180,
            115: 235,
            116: 236,
            117: 66,
            118: 48,
            119: 125,
            120: 76,
            121: 229,
            122: 85,
            123: 123,
            124: 93,
            125: 57,
            126: 100,
            127: 197,
            128: 239,
            129: 85,
            130: 211,
            131: 84,
            132: 207,
            133: 74,
            134: 110,
            135: 204,
            136: 123,
            137: 241,
            138: 188,
            139: 175,
            140: 121,
            141: 209,
            142: 31,
            143: 165,
            144: 224,
            145: 190,
            146: 6,
            147: 89,
            148: 60,
            149: 143,
            150: 170,
            151: 252,
            152: 12,
            153: 43,
            154: 162,
            155: 207,
            156: 118,
            157: 215,
            158: 28,
            159: 91,
            160: 1,
            161: 82,
            162: 107,
            163: 35,
            164: 0,
            165: 127,
            166: 158,
            167: 153,
            168: 41,
            169: 190,
            170: 175,
            171: 197,
            172: 21,
            173: 30,
            174: 101,
            175: 17,
            176: 9,
            177: 49,
            178: 161,
            179: 180,
            180: 76,
            181: 33,
            182: 191,
            183: 30,
            184: 104,
            185: 185,
            186: 19,
            187: 143,
            188: 144,
            189: 73,
            190: 94,
            191: 105,
            192: 13,
            193: 188,
            194: 85,
            195: 245,
            196: 114,
            197: 228,
            198: 194,
            199: 148,
            200: 76,
            201: 186,
            202: 207,
            203: 38,
            204: 230,
            205: 179,
            206: 174,
            207: 138,
            208: 114,
            209: 41,
            210: 216,
            211: 138,
            212: 175,
            213: 160,
            214: 95,
            215: 97,
            216: 234,
            217: 174,
            218: 106,
            219: 191,
            220: 63,
            221: 7,
            222: 203,
            223: 109,
            224: 185,
            225: 103,
            226: 124,
            227: 198,
            228: 173,
            229: 237,
            230: 77,
            231: 211,
            232: 152,
            233: 94,
            234: 69,
            235: 134,
            236: 39,
            237: 86,
            238: 127,
            239: 167,
            240: 99,
            241: 159,
            242: 6,
            243: 95,
            244: 113,
            245: 177,
            246: 137,
            247: 84,
            248: 48,
            249: 74,
            250: 202,
            251: 99,
            252: 102,
            253: 114,
            254: 158,
            255: 11,
            256: 71,
            257: 115,
            258: 215,
            259: 122,
            260: 232,
            261: 12,
            262: 170,
            263: 150,
            264: 165,
            265: 36,
            266: 128,
            267: 77,
            268: 254,
            269: 75,
            270: 155,
            271: 211,
            272: 222,
            273: 174,
            274: 249,
            275: 153,
            276: 201,
            277: 221,
            278: 81,
            279: 2,
            280: 116,
            281: 103,
            282: 81,
            283: 157,
            284: 94,
            285: 178,
            286: 86,
            287: 26,
            288: 226,
            289: 204,
            290: 1,
            291: 70,
            292: 125,
            293: 229,
            294: 246,
            295: 67,
            296: 10,
            297: 96,
            298: 188,
            299: 186,
            300: 36,
            301: 121,
            302: 118,
            303: 146,
            304: 239,
            305: 168,
            306: 119,
            307: 13,
            308: 35,
            309: 223,
            310: 10,
            311: 131,
            312: 13,
            313: 145,
            314: 203,
            315: 53,
            316: 179,
            317: 64,
            318: 122,
            319: 136,
            320: 186,
            321: 160,
            322: 89,
            323: 13,
            324: 200,
            325: 201,
            326: 170,
            327: 106,
            328: 18,
            329: 15,
            330: 39,
            331: 67,
            332: 103,
            333: 220,
            334: 216,
            335: 103,
            336: 232,
            337: 142,
            338: 131,
            339: 56,
            340: 197,
            341: 114,
            342: 160,
            343: 110,
            344: 60,
            345: 128,
            346: 27,
            347: 41,
            348: 245,
            349: 25,
            350: 223,
            351: 83,
            352: 43,
            353: 62,
            354: 118,
            355: 246,
            356: 112,
            357: 207,
            358: 106,
            359: 238,
            360: 83,
            361: 16,
            362: 127,
            363: 61,
            364: 57,
            365: 55,
            366: 132,
            367: 131,
            368: 246,
            369: 156,
            370: 248,
            371: 15,
            372: 165,
            373: 104,
            374: 177,
            375: 234,
            376: 197,
            377: 59,
            378: 80,
            379: 97,
            380: 89,
            381: 233,
            382: 136,
            383: 216,
            384: 188,
            385: 22,
            386: 146,
            387: 45,
            388: 18,
            389: 93,
            390: 119,
            391: 216,
            392: 3,
            393: 214,
            394: 82,
            395: 195,
            396: 202,
            397: 48,
            398: 112,
            399: 193,
            400: 110,
            401: 237,
            402: 145,
            403: 114,
            404: 171,
            405: 80,
            406: 109,
            407: 32,
            408: 229,
            409: 34,
            410: 234,
            411: 63,
            412: 26,
            413: 182,
            414: 116,
            415: 179,
            416: 249,
            417: 35,
            418: 215,
            419: 111,
            420: 232,
            421: 244,
            422: 79,
            423: 243,
            424: 46,
            425: 55,
            426: 44,
            427: 59,
            428: 55,
            429: 101,
            430: 100,
            431: 198,
            432: 251,
            433: 95,
            434: 13,
            435: 190,
            436: 82,
            437: 22,
            438: 79,
            439: 3,
            440: 98,
            441: 159,
            442: 209,
            443: 50,
            444: 38,
            445: 54,
            446: 186,
            447: 187,
            448: 44,
            449: 1,
            450: 75,
            451: 125,
            452: 174,
            453: 88,
            454: 45,
            455: 164,
            456: 19,
            457: 99,
            458: 150,
            459: 82,
            460: 97,
            461: 230,
            462: 206,
            463: 18,
            464: 180,
            465: 55,
            466: 1,
            467: 240,
            468: 168,
            469: 201,
            470: 237,
            471: 21,
            472: 32,
            473: 167,
            474: 14,
            475: 186,
            476: 0,
            477: 68,
            478: 0,
            479: 162,
            480: 103,
            481: 118,
            482: 95,
            483: 109,
            484: 61,
            485: 213,
            486: 199,
            487: 190,
            488: 181,
            489: 189,
            490: 60,
            491: 117,
            492: 243,
            493: 223,
            494: 42,
            495: 84,
            496: 86,
            497: 10,
            498: 97,
            499: 128,
            500: 17,
            501: 71,
            502: 250,
            503: 78,
            504: 199,
            505: 207,
            506: 86,
            507: 142,
            508: 112,
            509: 58,
            510: 203,
            511: 4,
            512: 229,
            513: 97,
            514: 10,
            515: 77,
            516: 86,
            517: 220,
            518: 194,
            519: 66,
            520: 208,
            521: 50,
            522: 147,
            523: 233,
            524: 68,
            525: 108,
            526: 245,
            527: 228,
            528: 87,
            529: 216,
            530: 235,
            531: 61,
            532: 149,
            533: 136,
            534: 253,
            535: 144,
            536: 198,
            537: 152,
            538: 222,
            539: 155,
            540: 13,
            541: 173,
            542: 146,
            543: 152,
            544: 9,
            545: 6,
            546: 192,
            547: 38,
            548: 216,
            549: 193,
            550: 64,
            551: 143,
            552: 160,
            553: 143,
            554: 228,
            555: 236,
            556: 101
        },
        name: 'Leaves of Grass by Walt Whitman.epub',
        announce: [],
        infoHashBuffer: {
            0: 210,
            1: 71,
            2: 78,
            3: 134,
            4: 201,
            5: 91,
            6: 25,
            7: 184,
            8: 188,
            9: 253,
            10: 185,
            11: 43,
            12: 193,
            13: 44,
            14: 157,
            15: 68,
            16: 102,
            17: 124,
            18: 250,
            19: 54
        },
        infoHash: 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36',
        created: '2013-08-01T13:27:46.000Z',
        createdBy: 'uTorrent/3300',
        urlList: [],
        files: [
            {
                path: 'Leaves of Grass by Walt Whitman.epub',
                name: 'Leaves of Grass by Walt Whitman.epub',
                length: 362017,
                offset: 0
            }
        ],
        length: 362017,
        pieceLength: 16384,
        lastPieceLength: 1569,
        pieces: [
            '1f9c3f59beec079715ec53324bde8569e4a0b4eb',
            'ec42307d4ce5557b5d3964c5ef55d354cf4a6ecc',
            '7bf1bcaf79d11fa5e0be06593c8faafc0c2ba2cf',
            '76d71c5b01526b23007f9e9929beafc5151e6511',
            '0931a1b44c21bf1e68b9138f90495e690dbc55f5',
            '72e4c2944cbacf26e6b3ae8a7229d88aafa05f61',
            'eaae6abf3f07cb6db9677cc6aded4dd3985e4586',
            '27567fa7639f065f71b18954304aca6366729e0b',
            '4773d77ae80caa96a524804dfe4b9bd3deaef999',
            'c9dd51027467519d5eb2561ae2cc01467de5f643',
            '0a60bcba24797692efa8770d23df0a830d91cb35',
            'b3407a88baa0590dc8c9aa6a120f274367dcd867',
            'e88e8338c572a06e3c801b29f519df532b3e76f6',
            '70cf6aee53107f3d39378483f69cf80fa568b1ea',
            'c53b506159e988d8bc16922d125d77d803d652c3',
            'ca3070c16eed9172ab506d20e522ea3f1ab674b3',
            'f923d76fe8f44ff32e372c3b376564c6fb5f0dbe',
            '52164f03629fd1322636babb2c014b7dae582da4',
            '1363965261e6ce12b43701f0a8c9ed1520a70eba',
            '004400a267765f6d3dd5c7beb5bd3c75f3df2a54',
            '560a61801147fa4ec7cf568e703acb04e5610a4d',
            '56dcc242d03293e9446cf5e457d8eb3d9588fd90',
            'c698de9b0dad92980906c026d8c1408fa08fe4ec'
        ]
    }
}
