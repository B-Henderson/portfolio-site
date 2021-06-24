const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'portfolio-site',
    siteUrl: 'https://www.bhenderson.co.uk',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    }, {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
        },
      },
    },
  ],
};
