# Meta-Op Game
Meta Op Game is a GameFi with no losers in which the winners split the interest created by all of the participants' deposits.
PoolTogether, which employs the same principle but for a lottery, was a big inspiration for us. On our project, we sought to replace the random factor with the skill factor, so that the greatest players might modify the chances in their favor.

Meta_Op Game is open source, you can find all the project in this repository.
This repository has 2 folders:
- client for Front End
- core for Core Contracts

## Roadmap

## Building Meta-Op Game
##### Clone the project
Clone the repository on your local machine
```bash
$ git clone 
```

### Front End ###
We use React. The Front End scripts are in "client" folder.
If you want to launch the Front End locally:

1. Go to "client" folder
```bash
$ cd client
```

2. Install the dependencies
```bash
$ npm install
```

3. Launch the server locally
```bash
$ npm start
```

4. Open your browser and go to `http://localhost:3000`
The backend server must be launched to display and interact with the catalog
Please follow next section for installing and deploying backend server

### Core Contracts ###
We use Hardhat

1. Go to "core" folder
```bash
$ cd core
```

2. Install the dependencies
```bash
$ npm install
```

3. The 3 contrats are available in "contracts" folder
```bash
$ cd contracts
```

4. We use .env for environment variables. Change the name of env.example to .env and fill in the 3 variables :
   - We use ALCHEMY_ID for the provider
   - We use PRIVATE KEY for the deployment
   - We use ETHERSCAN_API for contracts verification

5. We have configured 3 networks in `hardhat.config.js`:
   - Ethereum Goerli
   - Mainnet Optimism
   - Polygon Mumbai
   - Optimism-goerli

6. For deploying a contract, go to "scripts" folder and open deploy.js. Replace the parameter of ContractFactory by the name of the contract that you want to deploy:
`const Contract = await ethers.getContractFactory("NpngPool");`

7. Compile and deploy the contract:
```bash
$ npx hardhat compile
$ npx hardhat run --network Optimism-goerli scripts/deploy.js
```
8. Verify the contract on Etherscan
```bash
$ npx hardhat verify --network Optimism-goerli
```