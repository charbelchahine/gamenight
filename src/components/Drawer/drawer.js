import React from 'react';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import T from 'i18n-react';
import Link from '../Link/link';

import Menu from '../../assets/svg/menu.svg';

const Drawer = () => {
    const [openDrawer, setDrawerOpen] = React.useState(false);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const mobileNavContents = (
        <div
            role="presentation"
            className="drawerContents"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Link to="/">{T.translate('home.title')}</Link>
            <Link
                to="/contact"
                state={{
                    modal: true,
                }}
            >
                {T.translate('contact.title')}
            </Link>
        </div>
    );

    return (
        <>
            <IconButton
                aria-label="menu"
                classes={{ root: 'navIconButton' }}
                color="inherit"
                onClick={toggleDrawer(true)}
            >
                <Menu />
            </IconButton>
            <SwipeableDrawer
                open={openDrawer}
                classes={{ paper: 'drawer' }}
                disableDiscovery={iOS}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
                disableBackdropTransition={!iOS}
            >
                {mobileNavContents}
            </SwipeableDrawer>
        </>
    );
};

export default Drawer;
