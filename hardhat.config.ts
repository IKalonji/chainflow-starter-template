import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { ChainFlowConfig } from "./scripts/chainflow_config/chainflow.config";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "mumbai",
  networks:{
    hardhat: {},
    mumbai: {
      chainId: 80001,
      url: "https://rpc-mumbai.matic.today",
      accounts: [ChainFlowConfig.maticKey]
    }
  }
};

export default config;
