const { ethers } = require("hardhat");

async function main(){
    const MyNft = await ethers.getContractFactory("NFT");
    const myNFT = await MyNft.deploy();
    await myNFT.deployed();
    console.log("Contract deployed to address: ", myNFT.address);
}

main().then(() => {
    process.exit(0);
}).catch((error) => {
    console.error(error);
    process.exit(1);
})