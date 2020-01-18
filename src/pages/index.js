import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout/layout';
import Games from '../components/Games/games';
import '../styles/css/index.css';

const seo = {
    title: 'Mountain  Central',
    description: 'That is a Gatsby Site hosted on Netlify',
    class: 'homepage', // adds page specific styling
};

const IndexPage = ({ pageContext: { lang }, location: { pathname } }) => (
    <Layout path={pathname} seo={seo}>
        {T.setTexts(lang)}
        <Helmet title={T.translate('home.title')} />
        <Games />
    </Layout>
);

IndexPage.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

IndexPage.defaultProps = {
    pageContext: {},
    location: {},
};

export default IndexPage;
