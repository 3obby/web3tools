var bip39 = require("bip39");
var crypto = require("crypto");

var randomBytes = crypto.randomBytes(16);
var mnemonic = bip39.entropyToMnemonic(randomBytes.toString("hex") + "test");

console.log(mnemonic);
