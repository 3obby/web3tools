The Universal Upgradable Proxy Standard (UUPS) was proposed in EIP1822 as a way to create a standard for proxy contracts that have universal compatibility with all contracts. It overcomes the issue of proxy function selector clashes.

The logic contract will still be executed in the context of the proxy contract, thus utilizing the proxy contract’s storage, balance, and address, but the logic contract inherits from the Proxiable parent contract that houses the upgrade functionality. The upgrade logic contained in the proxiable smart contract is used to update the logic contract’s address, which is stored in the proxy contract.

The UUPS proxy pattern also has drawbacks. Though deployment in this pattern is cheaper (less gas), maintaining the dApp’s smart contracts using this pattern can be a bit more challenging. 

An important issue is that because the upgrade logic is not in the proxy contract but rather in the logic contract’s proxiable parent contract, if an updated logic contract fails to inherit proxiable then the upgrade functionality is not inherited and it’s impossible to upgrade the smart contract in future. 