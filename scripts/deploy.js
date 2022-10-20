// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
var fs = require("fs");

async function main() {
  const MintContract = await hre.ethers.getContractFactory("MintContract");
  const mintContract = await MintContract.deploy();

  await mintContract.deployed();

  console.log(`Contract deployed to ${mintContract.address}`);
  fs.writeFile(
    "./src/artifacts/contract_address.json",
    JSON.stringify({ ContractAddress: mintContract.address }),
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
