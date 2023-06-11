import { exec } from 'child_process';

export const addOne = () => {
    exec(`flow transactions build .\\flow\\cadence\\transactions\\AddOne.cdc --network testnet --proposer my-testnet-account --authorizer my-testnet-account --payer my-testnet-account --filter payload --save tx1 && 
    flow transactions sign tx1 --network testnet --signer my-testnet-account --filter payload --save tx2 && 
    flow transactions send-signed tx2 --network testnet && 
    flow scripts execute .\\flow\\cadence\\scripts\\AddOne.cdc --network testnet`, 
    (error,stdout,stderr)=>{
        if(error){
            console.log(error);
        }
        if(stdout){
            console.log(stdout);
        }
        if(stderr){
            console.log(stderr);
        }
    })
}

export const addFive = () => {
    exec(`flow transactions build .\\flow\\cadence\\transactions\\AddFive.cdc --network testnet --proposer my-testnet-account --authorizer my-testnet-account --payer my-testnet-account --filter payload --save tx1 && 
    flow transactions sign tx1 --network testnet --signer my-testnet-account --filter payload --save tx2 && 
    flow transactions send-signed tx2 --network testnet && 
    flow scripts execute .\\flow\\cadence\\scripts\\AddFive.cdc --network testnet`, 
    (error,stdout,stderr)=>{
        if(error){
            console.log(error);
        }
        if(stdout){
            console.log(stdout);
        }
        if(stderr){
            console.log(stderr);
        }
    })
}

