import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const PageTemplate = ({ pageContext: { lang, html, title }, location: { pathname } }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={title} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
);

PageTemplate.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
        html: PropTypes.shape({}),
        title: PropTypes.string,
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

PageTemplate.defaultProps = {
    pageContext: {},
    location: {},
};

export default PageTemplate;
