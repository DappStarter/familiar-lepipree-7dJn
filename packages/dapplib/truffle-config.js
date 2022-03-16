require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remember million idea entire broken slogan'; 
let testAccounts = [
"0x5f746c4e51a5def8039906f9ed5adf84517588641ce51c815f7d5b104957722e",
"0x521c924aa4347d3f96985a5a8ded8786054859d4e57910399682c44b34f6cd16",
"0x721574a7ac0bb92034abcc3ad3d4256a61b580ffbbc6ca9702a3cc7620c21d5d",
"0xf3ec37ca0225d4b43169583250a35ff6888b8422d2101a08d2f00f24432e032b",
"0x0c0fa2e5fae12f6775bbe2ead4b4cd3ae49dfa129a5f3b71e7c25918758e523d",
"0xa49e71527ceaebdfc4abd424897a53ce40959fcdcb2ceecf45ebc06ebe517e14",
"0x4fa4a246b3027586f35c530b5f2e77998cb95702ac9742ccc235383a0aa5d3b3",
"0x8fb0fe0cd879f93bfd75d79a3ff7d29afaa33b88294741d0ee067da09b3dd61c",
"0xd9a2f09080ebcf12de9b9cedeeaf63f575eefd72ca9b57b8fc4dde1da3527c3b",
"0x783d640338e0eb565bb49d7183e95b400ee385a5165ea8c4bd3866eb95be59bd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

