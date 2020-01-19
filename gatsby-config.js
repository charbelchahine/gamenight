module.exports = {
    siteMetadata: {
        title: 'Game Night',
        description: 'Hosting a game night?',
        type: 'Website',
        name: 'Game Night',
        url: 'https://game-night.netlify.com/',
        sameAs: ['http://www.facebook.com/your-profile', 'http://www.twitter.com/yourProfile'],
        facebookAppID: '',
        twitterSiteID: '',
        twitterUserID: '',
        siteUrl: 'https://game-night.netlify.com/',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            },
        },
        'gatsby-plugin-catch-links',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Game Night',
                short_name: 'Game Night', // must be less than 12 characters
                start_url: '/',
                background_color: '#1a1a33',
                theme_color: '#f8f8f8',
                display: 'minimal-ui',
                icon: 'static/icons/icon.png',
            },
        },
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-nprogress',
            options: {
                color: '#1a1a33',
                showSpinner: false,
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-use-dark-mode',
            options: {
                classNameDark: 'dark-mode',
                classNameLight: 'light-mode',
                storageKey: 'darkMode',
                minify: true,
            },
        },
        {
            resolve: `gatsby-plugin-modal-routing`,
            options: {
                appElement: '#___gatsby',
                modalProps: {
                    className: 'gameModal',
                    bodyOpenClassName: 'openModal',
                    overlayClassName: 'gameModalOverlay',
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
    ],
};
