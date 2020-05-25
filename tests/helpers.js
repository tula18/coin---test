const { Transaction, Blockchain } = require('../src/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const signingKey = ec.keyFromPrivate('6014f73617b74f782098f657fe70ce77d99587aa3d4f5b8ce1c5dbba4e4579a3');

function createSignedTx(amount = 10) {
    const txObject = new Transaction(signingKey.getPublic('hex'), 'wallet2', amount);
    txObject.timestamp = 1;
    txObject.signTransaction(signingKey);
  
    return txObject;
}

function createBCWithMined() {
    const blockchain = new Blockchain();
    blockchain.minePendingTransactions(signingKey.getPublic('hex'));
  
    return blockchain;
}

function createBlockchainWithTx() {
    const blockchain = new Blockchain();
    blockchain.minePendingTransactions(signingKey.getPublic('hex'));
  
    const validTx = new Transaction(signingKey.getPublic('hex'), 'b2', 10);
    validTx.signTransaction(signingKey);
  
    blockchain.addTransaction(validTx);
    blockchain.addTransaction(validTx);
    blockchain.minePendingTransactions(1);
  
    return blockchain;
}

module.exports.signingKey = signingKey;
module.exports.createSignedTx = createSignedTx;
module.exports.createBlockchainWithTx = createBlockchainWithTx;
module.exports.createBCWithMined = createBCWithMined;