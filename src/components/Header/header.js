import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/link';
import Sidebar from '../Sidebar/sidebar';
import logo from '../../assets/images/logo.svg';

const Header = ({ children }) => (
    <header className="content">
        <Sidebar />
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
