import React from 'react';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

export default ({ pageContext: { lang, html, title }, location: { pathname } }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={title} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
);
