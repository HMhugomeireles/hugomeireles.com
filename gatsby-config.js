/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
}

module.exports = {

  siteMetadata: {
    title: `Hugo Meireles`
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'aboutme',
        path: `${__dirname}/content/me/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
    'gatsby-transformer-remark',
  ]

}