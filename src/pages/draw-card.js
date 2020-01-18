import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Fab } from '@material-ui/core';
import Layout from '../components/Layout/layout';
import '../styles/css/index.css';

import CloseIcon from '../assets/svg/x.svg';

const seo = {
    title: 'Game Night',
    description: 'That is a Gatsby Site hosted on Netlify',
    className: 'drawCardPage gamePage',
};

const DrawCardPage = ({ pageContext: { lang }, location: { pathname } }) => (
    <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => (
            <Layout path={pathname} isModal={modal} seo={seo}>
                {T.setTexts(lang)}
                <Helmet title={T.translate('drawCard.title')} />
                <div className="gameContents drawCardContents">
                    <span className="gameName">{T.translate('drawCard.title')}</span>
                    {modal && (
                        <Fab aria-label="Close" classes={{ root: 'closeButton' }} href={closeTo}>
                            <CloseIcon />
                        </Fab>
                    )}
                </div>
            </Layout>
        )}
    </ModalRoutingContext.Consumer>
);

DrawCardPage.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

DrawCardPage.defaultProps = {
    pageContext: {},
    location: {},
};

export default DrawCardPage;
