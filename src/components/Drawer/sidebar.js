import React from 'react';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import Menu from '../../assets/svg/menu.svg';

const Sidebar = () => {
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
            className="mobileNav"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            hello
        </div>
    );

    return (
        <div className="mobileMenu">
            <IconButton aria-label="menu" className="mobileNavToggle" onClick={toggleDrawer(true)}>
                <Menu />
            </IconButton>
            <SwipeableDrawer
                open={openDrawer}
                disableDiscovery={iOS}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
                disableBackdropTransition={!iOS}
            >
                {mobileNavContents}
            </SwipeableDrawer>
        </div>
    );
};

export default Sidebar;