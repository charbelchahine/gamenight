import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Helmet from 'react-helmet';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import { Fab } from '@material-ui/core';
import Layout from '../components/Layout/layout';
import ComingSoon from '../components/ComingSoon/comingSoon';

import CloseIcon from '../assets/svg/x.svg';
import '../styles/css/index.css';

const seo = {
    title: 'Game Night',
    description: 'That is a Gatsby Site hosted on Netlify',
    className: 'roulettePage gamePage',
};

const RoulettePage = ({ pageContext: { lang }, location: { pathname } }) => (
    <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => (
            <Layout path={pathname} isModal={modal} seo={seo}>
                {T.setTexts(lang)}
                <Helmet title={T.translate('roulette.title')} />
                <div className="gameContents rouletteContents">
                    <span className="gameName">{T.translate('roulette.title')}</span>
                    <ComingSoon />
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

RoulettePage.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

RoulettePage.defaultProps = {
    pageContext: {},
    location: {},
};

export default RoulettePage;
