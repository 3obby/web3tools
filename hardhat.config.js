/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};

require('dotenv').config({path:__dirname+'/.env'});

require("@nomiclabs/hardhat-ethers");

require("@openzeppelin/hardhat-upgrades");

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL_HTTP
const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY_DEV1;

const ETHERSCAN_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 solidity: {
  compilers: [
    {
      version: "0.8.17",
    },
    {
      version: "0.6.0",
    },
  ],
},
 defaultNetwork: "hardhat",
 networks: {
   localhost: {
     chainId: 31337,
   },
   goerli: {
     url: GOERLI_RPC_URL,
     accounts: {
      mnemonic:PRIVATE_KEY,
     },
     chainId: 5,
   },
 },
 etherscan: {
   apiKey: ETHERSCAN_KEY,
 },
 paths: {
  sources: "./solidity/contracts",
  tests: "./solidity/test",
  cache: "./solidity/cache",
  artifacts: "./solidity/artifacts"
},
};