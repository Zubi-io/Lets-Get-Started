module.exports = {
  siteMetadata: {
    title: 'Open Source Fiesta',
    author: 'allen-joseph',
    profile: 'https://github.com/zubi-io',
    siteUrl: `https://tedst.tech`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/profiles`,
        name: 'profiles',
      },
    },
    {
      //for generating sitemaps for the website
      resolve: `gatsby-plugin-sitemap`
    }
  ]
}
