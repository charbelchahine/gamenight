import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import Img from 'gatsby-image';
import useDarkMode from 'use-dark-mode';
import Helmet from 'react-helmet';
import Layout from '../components/Layout/layout';

import Behance from '../assets/svg/socialMedia/behance.svg';
import LinkedIn from '../assets/svg/socialMedia/linkedIn.svg';
import '../styles/css/index.css';

const aboutImage = data => {
    const isDarkMode = useDarkMode().value;
    return isDarkMode
        ? data.darkGNDevices.childImageSharp.fluid
        : data.lightGNDevices.childImageSharp.fluid;
};

const profilePicture = data => {
    return data.profilePicture.childImageSharp.fluid;
};

const AboutPage = ({ pageContext: { lang }, location: { pathname }, data }) => (
    <Layout path={pathname}>
        {T.setTexts(lang)}
        <Helmet title={T.translate('about.title')} />
        <section className="aboutContents">
            <div className="aboutGameNight">
                <div className="fluidImageWrapper">
                    <Img fluid={aboutImage(data)} alt="Game Night on your devices" />
                </div>

                <p className="aboutDescriptionInfo">{T.translate('about.description')}</p>
            </div>
            <div className="aboutDeveloper">
                <div className="fluidImageWrapper">
                    <Img
                        fluid={profilePicture(data)}
                        alt="Charbel Chahine"
                        className="profilePicture"
                    />
                </div>
                <div className="aboutDeveloperInfo">
                    <span className="aboutDeveloperTitle">
                        {T.translate('about.aboutDeveloper')}
                    </span>
                    <p className="aboutDeveloperText">
                        {T.translate('about.developerDescription')}
                    </p>
                    <div className="aboutLinks">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="socialMediaLink"
                            href="https://www.linkedin.com/in/charbelchahine/"
                        >
                            <LinkedIn />
                            linkedin.com/in/charbelchahine
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="socialMediaLink"
                            href="https://www.behance.net/charbelchahine"
                        >
                            <Behance />
                            behance.net/charbelchahine
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

AboutPage.propTypes = {
    data: PropTypes.shape({}),
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
    data: {},
};

export default AboutPage;

export const aboutQuery = graphql`
    fragment fixedGameNightDevices on File {
        childImageSharp {
            fluid(maxWidth: 438, maxHeight: 276, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }

    fragment fixedProfilePicture on File {
        childImageSharp {
            fluid(maxWidth: 223, maxHeight: 223, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }

    query AboutImages {
        lightGNDevices: file(relativePath: { eq: "assets/images/gameNightDevices_light.png" }) {
            ...fixedGameNightDevices
        }
        darkGNDevices: file(relativePath: { eq: "assets/images/gameNightDevices_dark.png" }) {
            ...fixedGameNightDevices
        }
        profilePicture: file(relativePath: { eq: "assets/images/profilePicture.png" }) {
            ...fixedProfilePicture
        }
    }
`;
