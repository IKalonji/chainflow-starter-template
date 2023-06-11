import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    mumbai: {
      chainId: 80001,
      url: "https://rpc-mumbai.matic.today",
      accounts: ["<Private Key>"]
    }
  }
};

export default config;
