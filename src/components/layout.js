import React from 'react';
import PropTypes from 'prop-types';
import Head from './head';
import Header from './header';
import Lang from './lang';

import NavLinks from './navlinks';

const Layout = ({ children, path, seo }) => (
    <div>
        <Head seo={seo} path={path} />
        <Header siteTitle="Mountain Central">
            <NavLinks />
            <Lang path={path} />
        </Header>
        <div>{children}</div>
    </div>
);

Layout.propTypes = {
    children: PropTypes.node,
};

Layout.defaultProps = {
    children: '',
};

export default Layout;
