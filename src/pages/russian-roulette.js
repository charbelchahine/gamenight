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
    className: 'russianRoulettePage gamePage',
};

const RussianRoulettePage = ({ pageContext: { lang }, location: { pathname } }) => (
    <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => (
            <Layout path={pathname} isModal={modal} seo={seo}>
                {T.setTexts(lang)}
                <Helmet title={T.translate('russianRoulette.title')} />
                <div className="gameContents russianRouletteContents">
                    <span className="gameName">{T.translate('russianRoulette.title')}</span>
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

RussianRoulettePage.propTypes = {
    pageContext: PropTypes.shape({
        lang: PropTypes.shape({}),
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }),
};

RussianRoulettePage.defaultProps = {
    pageContext: {},
    location: {},
};

export default RussianRoulettePage;
