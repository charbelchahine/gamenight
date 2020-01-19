import React from 'react';
import PropTypes from 'prop-types';

import Head from '../Head/head';
import Header from '../Header/header';

const Layout = ({ children, path, seo, isModal }) => (
    <>
        <Head seo={seo} path={path} />
        {!isModal && <Header path={path} siteTitle="Game Night" />}
        <main className={!isModal ? 'nonModal' : ''}>{children}</main>
    </>
);

Layout.propTypes = {
    children: PropTypes.node,
    path: PropTypes.string.isRequired,
    seo: PropTypes.shape({}),
    isModal: PropTypes.bool,
};

Layout.defaultProps = {
    children: '',
    seo: {},
    isModal: false,
};

export default Layout;
