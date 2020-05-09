import React from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import {Link} from '../routes';

export default () => {
    return (
        <Menu style={{ marginTop: '30px' }} >
            <Link route="/">
                <a className="item">
                    CrowdCoin <Icon name="rupee" />
                </a>
            </Link>

            <Menu.Menu position="right">
            <Link route="/">
                <a className="item">
                    Campaigns
                </a>
            </Link>
            <Link route="/campaigns/new">
                <a className="item">
                    +
                </a>
            </Link>
            </Menu.Menu>
        </Menu>
    );
}