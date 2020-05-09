const HDWALLETProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWALLETProvider(
    'shine recall pause dove earn zero seminar gown caught mouse goat twelve',
    'https://rinkeby.infura.io/v3/fd0df4097d354dd7b5c98cc7b438ad02',
);

const web3 = new Web3(provider);

const deploy = async() =>{
    const accounts = await web3.eth.getAccounts();

    console.log('Deploying from Acccount',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({gas: '1000000', from: accounts[0]});

    console.log('Contract Deployed:', result.options.address);
};
deploy();