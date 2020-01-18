import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '../Drawer/drawer';
import Logo from '../../assets/images/logo.svg';

const Header = ({ children }) => (
    <header className="content">
        <Drawer />
        <Logo />
        <div className="navRightHandSide">{children}</div>
    </header>
);

Header.propTypes = {
    children: PropTypes.node,
};

Header.defaultProps = {
    children: '',
};

export default Header;
