import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';
import ComingSoon from '../components/ComingSoon/comingSoon';
import '../styles/css/index.css';

const AboutPage = ({ pageContext: { lang }, location: { pathname } }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={T.translate('about.title')} />
        <ComingSoon />
    </Layout>
);

AboutPage.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

AboutPage.defaultProps = {
    pageContext: {},
    location: {},
};

export default AboutPage;
