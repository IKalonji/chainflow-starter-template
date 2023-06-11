import { ethers } from "hardhat";

async function main() {
  const chainflow = await ethers.deployContract("ChainFlow");

  await chainflow.waitForDeployment();

  console.log(
    `ChainFlow automation base is deployed to ${chainflow.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
