module.exports = {
  siteMetadata: {
    title: 'Mountain Central',
    description: 'Auriane Douida Portfolio Website',
    type: 'Person',
    name: 'Mountain Central',
    url: 'https://mountaincentral.netlify.com/',
    sameAs: [
      'http://www.facebook.com/your-profile',
      'http://www.twitter.com/yourProfile',
    ],
    facebookAppID: '',
    twitterSiteID: '',
    twitterUserID: '',
    siteUrl: 'https://mountaincentral.netlify.com/',
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
        name: 'Mountain Central',
        short_name: 'Mtn Central', // less than 12 characters
        start_url: '/',
        background_color: '#0E283F',
        theme_color: '#582644',
        display: 'minimal-ui',
        icon: 'static/icons/icon.png',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#575757',
        showSpinner: false,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
};
