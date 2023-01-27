Transparent proxy patterns do have some drawbacks. They’re susceptible to function selector clashes if they’re not handled carefully, they can cost more gas to operate (as the EVM needs extra gas to load the logic contract address for each delegatecall), and deploying the proxy contract in this pattern can also cost more gas.

