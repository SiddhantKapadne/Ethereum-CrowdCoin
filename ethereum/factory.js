import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x9C690a2B6B445F4CaA23621ec525E2E2fF440947'
);

export default instance;