import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';
import '../styles/css/index.css';

const FeedbackPage = ({ pageContext: { lang }, location: { pathname } }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={T.translate('feedback.title')} />
        <section id="feedbackForm" className="content">
            <div className="feedbackGrid">
                <span>hello</span>
                <span>hello</span>
                <span>hello</span>
                <span>hello</span>
            </div>
        </section>
    </Layout>
);

FeedbackPage.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

FeedbackPage.defaultProps = {
    pageContext: {},
    location: {},
};

export default FeedbackPage;
