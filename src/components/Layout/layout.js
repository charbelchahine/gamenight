import React from 'react';
import PropTypes from 'prop-types';

import Head from '../Head/head';
import Header from '../Header/header';

const Layout = ({ children, path, seo }) => (
    <>
        <Head seo={seo} path={path} />
        <Header siteTitle="Mountain Central" path={path} />
        <main>{children}</main>
    </>
);

Layout.propTypes = {
    children: PropTypes.node,
    path: PropTypes.string.isRequired,
    seo: PropTypes.shape({}),
};

Layout.defaultProps = {
    children: '',
    seo: {},
};

export default Layout;
