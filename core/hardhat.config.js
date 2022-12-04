require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_ID;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      },
      // chainId: 1337
    },
    ethereum: {
      url: ``,
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/fp2SHb9VlSZ7d3H7B0cBL78PvdZk6ky0`,
      accounts: [PRIVATE_KEY],
    },
    optimism: {
      url: "https://mainnet.optimism.io",
      accounts: [PRIVATE_KEY],
    },
    // for testnet
    "optimism-goerli": {
      url: "https://opt-goerli.g.alchemy.com/v2/S1ipZ0W1G1YiarIJiUQ5HIflzbf36iAJ",
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
