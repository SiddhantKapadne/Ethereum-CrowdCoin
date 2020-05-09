import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the Browser
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we are on brower *OR* the user is not runninng metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/fd0df4097d354dd7b5c98cc7b438ad02'
    );
    web3 = new Web3(provider);
}

export default web3;