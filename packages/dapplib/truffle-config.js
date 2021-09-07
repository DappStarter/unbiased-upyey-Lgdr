require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remind puppy just cloth equal general'; 
let testAccounts = [
"0xaadda4703ca87ddc168cd1c6ecd7d1da6f86d854c11c932db2d5f3031ad26687",
"0x381c1e6b1e2be07109e481150344a0520997b0cd0983533d75054d9a94e92d05",
"0x6181550a5aa03b1baa18192c9985adb80e7a234ff51c8e5a426cbfd316548a0d",
"0x8bdc4c3321b712929a96566b6df1f08bc00a8040a80cbecefdf8e498d2c3a6f1",
"0x7b8dd849cf06f2da455d6e4d1ba1efb0880328756965090b429724f1825ed07a",
"0xdbd8efa0b5426577b4ce6d8cf12540390c6ce0291bd9672f0a4e212f476792f7",
"0x9d47b269ac3be85684d893d73e6af819f9f62888efff523e273daae6225f9950",
"0xac5f605814d9b2cce8a4551da7bc1d7df2bb0b7b255c489a00b3cec3e81286a6",
"0x9c54fb131d9beb97fa2464fb34926bd1cd35863b4a613cd378efb30bc34f12ea",
"0x3cfd303f368c7c960c2968af4aaf034f3b02a39b75640a79e2ea5f3e70080aee"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

