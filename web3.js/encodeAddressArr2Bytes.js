var Web3 = require('web3');

const web3 = new Web3;


var dog = web3.eth.abi.encodeParameters(
  ['address[]'],
  [['0xe6BeC63687eA7F91d7F729818eAeedC48B1961c0']]
);

console.log(dog)