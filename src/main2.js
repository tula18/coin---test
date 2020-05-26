const { Block } = require('../src/blockchain');
const { createSignedTx } = require('../tests/helpers');

let blockObj = null;

blockObj = new Block(1000, [createSignedTx()], 'a1');

blockObj.timestamp = 1;
blockObj.mineBlock(1);

console.log(blockObj.hash);