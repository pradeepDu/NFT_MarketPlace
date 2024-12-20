
const { ethers } = require("hardhat");

async function main() {
  // Compile the smart contracts
  console.log("Compiling contracts...");
  await hre.run("compile");

  // Get the contract factory
  const NFTcontract = await ethers.getContractFactory("NFTcontract");

  // Deploy the contract
  console.log("Deploying the contract...");
  const contract = await NFTcontract.deploy(/* Constructor arguments, if any */);

  await contract.deployed();

  console.log(`Contract deployed to address: ${contract.address}`);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error deploying contract:", error);
    process.exit(1);
  });
v