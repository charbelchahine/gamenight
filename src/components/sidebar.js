import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import NavLinks from './navlinks';
import menu from '../assets/images/menu.svg';
import x from '../assets/images/x.svg';

function Sidebar() {
    return (
        <div className="mobileMenu">
            <Menu
                customBurgerIcon={<img src={menu} alt="mobile-menu" />}
                customCrossIcon={<img src={x} alt="close-menu" />}
            >
                <NavLinks />
            </Menu>
        </div>
    );
}

export default Sidebar;
