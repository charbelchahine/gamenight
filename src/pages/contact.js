import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const ContactPage = ({ pageContext: { lang }, location: { pathname } }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={T.translate('contact.title')} />
        <section id="contactForm" className="content">
            <div className="contactGrid">
                {/* <TextField
                    id="floating-center-title"
                    label={T.translate('contact.inquiry')}
                    lineDirection="center"
                    className="md-cell md-cell--bottom contactInput"
                />
                <TextField
                    id="floating-center-title"
                    label={T.translate('contact.email')}
                    lineDirection="center"
                    className="md-cell md-cell--bottom contactInput"
                />
                <TextField
                    id="floating-center-title"
                    label={T.translate('contact.first')}
                    lineDirection="center"
                    className="md-cell md-cell--bottom contactInput"
                />
                <TextField
                    id="floating-center-title"
                    label={T.translate('contact.last')}
                    lineDirection="center"
                    className="md-cell md-cell--bottom contactInput"
                />
                <TextField
                    id="floating-center-title"
                    label={T.translate('contact.phone')}
                    lineDirection="center"
                    className="md-cell md-cell--bottom contactInput"
                />
                <TextField
                    id="floating-center-title"
                    label={T.translate('contact.company')}
                    lineDirection="center"
                    className="md-cell md-cell--bottom contactInput"
                /> */}
            </div>
            {/* <Button raised secondary swapTheming id="submitForm">
                {T.translate('contact.submit')}
            </Button> */}
        </section>
    </Layout>
);

ContactPage.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

ContactPage.defaultProps = {
    pageContext: {},
    location: {},
};

export default ContactPage;
