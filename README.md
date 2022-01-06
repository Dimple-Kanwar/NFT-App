Setup Commands:

cd NFT-App

Install Dependencies:
    npm install

Then, replace your MetaMask private key and HTTP Alchemy API URL in .env file.

Compile smart contract:
    npx hardhat compile

Deploy smart contract:
    npx hardhat --network ropsten run scripts/deploy.js 
    Contract deployed to address:  0xfE6BF77dd2D7a1ab5425c8C1DeDd19AaedaC6aCB

Check the deployed contract on ropsten explorer:
https://ropsten.etherscan.io/address/0xfE6BF77dd2D7a1ab5425c8C1DeDd19AaedaC6aCB


Hurray!! You have deployed your own NFT on Ethereum Ropsten network.