const openpgp = require('openpgp') // use as CommonJS, AMD, ES6 module or via window.openpgp

const PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v4.6.2
Comment: https://openpgpjs.org

xsBNBF2/mJQBCAC4s8hS4VpZfKv6PjCVu5XS1NdQkyLkBIGmOOdrkrsY4/tV
E3989PipG0YgWiB9PAICMDdprWaINokpwNP1XgWzR7aCwkHIXR/2+8x1njTX
hKyuBnwNbWq+seHGvO9Kdqp1K5kq556QKP1yqKFHieM/0YmbH4evX5b5p+RR
yZ1GK4BtUy40HvenDbS6gD7Djw9m3fanBM0GiW/FtDt4yzCOmF8pamI8Am2o
BsopWm4dHxwm7Fji/YNResn4dXRdGtlksPDrNTKOQhejKQ5AVKssZW6UCFNz
N/X95+zGvTgcvxt9DQbLnyjNH6ANTE4Ir0nrskGd3f/mZrQWebwIFPFfABEB
AAHNJFBlbmd1aW5zIDxtaXhlZGJhZ2xhbmdhcmFAZ21haWwuY29tPsLAdQQQ
AQgAHwUCXb+YlAYLCQcIAwIEFQgKAgMWAgECGQECGwMCHgEACgkQD/3yAkG7
3Q2htQgAodlcpt0sFk57AuYzttxmipAcVL2qq+YlYYhLLYLgm8ijoOiAPtZx
LJL/EXg2GybOHtgUPm9qLzQr3M11h7d/w9TebXz/XS6CR2yD4TrE1/ZcBy5Q
9/A7xpjUglf72V/wLd+4knKTyrXYDxwA81Lhm0ASVl/hpFZ+UqKshLDTnTyT
dpW8H8s+s9aewvsnoC+jxXoiOKSzJrGHuAwMzk5tCDDZwgQswc+eMdPpaEYe
fRipR/WmdloVW3l3jn6pEqq27XNrI4GyiOWjDyMlx6F7KUgAQUfXyQBW+eCf
kFDsu7/w6dhQ4a0izrrfiVGr61GH7rm7feIxvP9NHXG6ksyrBc7ATQRdv5iU
AQgAsvQs4OQYQKunJpgJSAxqYEGua6TLTE4yVpbo14Qll3eHp/l8cbq0eUEd
tAxfE2PRRutkOTW60B8F1buAZpjhgQ0Uh8FoEfMI5eArgRwxrN2OqMd8k32B
ur1qcnBm8AvmXFALM4Bf99yquKMvDzDrz6knsFsapUARjB72+LRziVCqgBkA
orfeCKXQbYjUKhUbHLLFH4i0iJjrCqm7Ua17Qh3YqwdwV4Xz1Vpowp+udm03
SSHa4sxjQf65JsnZvoSvfrYos/u7oqCax8v/2x3cagrfae9Ed/XMAxQwm/Hm
Z0Orkb/XMJk5Ex/uaQyX7ksZF69dkH/Adi3SxJGjCMewdQARAQABwsBfBBgB
CAAJBQJdv5iUAhsMAAoJEA/98gJBu90N7KcH/0K3X0nwDlpA3oCieUFzKoCi
oYRWXu/XqzJ1JCnoHOtdVouNw9OZngs8u5VzEzSa5jo4dTkfIokLuEZ5ounL
M0I5yCkOL46yxUZOpp3lJPUvGkKDBpIKJRJWFnXhBlkVvCtIlBYvTSmtZHar
73ccfGJWhM28HiHMHTng6PHXePOax3FUM//Y1poArGi1W38Kjq2f6EhDQEDg
LlkPpglgaHCDaLF8YJDUO0vLjrr1E4PbMYs0Ko7VGQXvDghFgyB3Pj/7aoNC
SoyAN7n0/jwDQClBpCHcKhpYdsMm+ygjR3rCzWZURrau7wcQ1MEQw2BqkSlH
dcKXu3v3npTBgTjsffI=
=2NJP
-----END PGP PUBLIC KEY BLOCK-----
`

const encrypt = async (object) => {

    let pubkeys = [PUBLIC_KEY]

    let publicKeysPromises = pubkeys.map(async (key) => {
        return (await openpgp.key.readArmored(key)).keys[0]
    });

    const options = {
        message: openpgp.message.fromText(object),
        // resolve all promises returned before
        publicKeys: await Promise.all(publicKeysPromises),       // for encryption
        // privateKeys: [privKeyObj]                                 // for signing (optional)
    }

    return openpgp.encrypt(options).then(ciphertext => {
        const encrypted = ciphertext.data // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
        return encrypted
    })
}

module.exports.encrypt = encrypt