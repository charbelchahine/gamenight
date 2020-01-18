import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import Layout from '../components/Layout/layout';
import Link from '../components/Link/link';

const ContactPage = ({ pageContext: { lang }, location: { pathname } }) => (
    <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => (
            <Layout path={pathname}>
                {T.setTexts(lang)}
                <Helmet title={T.translate('contact.title')} />
                <section id="contactForm" className="content">
                    <div className="contactGrid">
                        <span>hello</span>
                        <span>hello</span>
                        <span>hello</span>
                        <span>hello</span>
                        {modal && <Link to={closeTo}>Close</Link>}
                    </div>
                </section>
            </Layout>
        )}
    </ModalRoutingContext.Consumer>
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
