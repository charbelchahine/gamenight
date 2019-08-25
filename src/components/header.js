import React from 'react';
import PropTypes from 'prop-types';
import Link from './link';
import Sidebar from './sidebar';
import logo from '../assets/images/logo.svg';

const Header = ({ children, data }) => (
    <header className="content">
        <Sidebar className="hello" />
        <Link to="/" activeClassName="active" className="navLogo">
            <img src={logo} alt="logo" />
        </Link>
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
