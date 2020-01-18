import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout/layout';
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
        <section className="content">
            <h1>{T.translate('home.welcome')}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus imperdiet,
                iaculis ipsum quis, egestas turpis. Nullam bibendum a ex at elementum. Praesent
                bibendum enim ut nisi molestie dignissim. Aliquam ut magna semper, sodales leo eget,
                malesuada risus. Integer tempor semper lectus vitae ultrices. Aenean consequat nibh
                ac turpis luctus, eu cursus leo congue. Duis dignissim lorem at mattis pharetra.
                Nullam in justo blandit, aliquet elit at, sodales ante. Fusce tempus metus et eros
                fringilla, et volutpat turpis ullamcorper. Suspendisse tempus nibh eu turpis
                laoreet, at imperdiet felis semper. Nam consequat arcu non est feugiat egestas
                dictum maximus arcu. Sed rutrum odio ac nisi finibus tempus. Vestibulum lobortis
                nisl ligula, quis mattis arcu malesuada hendrerit. Proin mollis dolor vel diam
                feugiat, a tristique libero placerat. Fusce egestas justo non viverra blandit.
            </p>
        </section>
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
