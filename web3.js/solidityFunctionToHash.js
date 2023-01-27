import web3 from "web3";

//https://solidity-by-example.org/function-selector/

const args = process.argv.splice(2);
if(args[0]==undefined){
    console.log("Enter a function selector in the form of \"<functionName>(type1, type2, ...)\"");
}
else{
    console.log(web3.utils.sha3(args[0]));
}


