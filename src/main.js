const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


// Your private key goes here
const myKey = ec.keyFromPrivate('790454c23dd380f571d450b7d9700318e5d5f63d091d989820c67dfeb8a13d7b');


// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');


// Create new instance of Blockchain class
const coin = new Blockchain();


// Mine block
coin.minePendingTransactions(myWalletAddress);


// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);


// Mine block
coin.minePendingTransactions(myWalletAddress);


// Create second transaction
const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
coin.addTransaction(tx2);


// Mine block
coin.minePendingTransactions(myWalletAddress);


console.log();
console.log(`Balance of almog is ${coin.getBalanceOfAddress(myWalletAddress)}`);


// Uncomment this line if you want to test tampering with the chain
// savjeeCoin.chain[1].transactions[0].amount = 10;


// Check if the chain is valid
console.log();
console.log('Blockchain valid?', coin.isChainValid() ? 'Yes' : 'No');
