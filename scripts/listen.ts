import { ethers } from "hardhat";
import { ChainFlowConfig } from "./chainflow_config/chainflow.config";

async function main() {
    
    const chainflowAddress = ChainFlowConfig.chainflowAddress; ///USDC Contract
    const provider = new ethers.JsonRpcProvider("wss://rpc-mumbai.matic.today");
    const contract = new ethers.Contract(chainflowAddress, ChainFlowConfig.chainflowABI, provider);
    contract.on("FlowAutomate", (from, flowContract, flowContractFunction)=>{
        let automation ={
            from: from,
            to: flowContract,
            value: flowContractFunction,
        }
        console.log(JSON.stringify(automation, null, 4))
    })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});