module.exports = {
  siteMetadata: {
    title: `Python Pizza`,
    description: `Python Pizza is a 1 day micro-conference organised around the world to unite the love of Pizza and Python`,
    author: `@pythonpizzaconf`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `python.pizza`,
        short_name: `python.pizza`,
        start_url: `/?homepage=1`,
        background_color: `#fff`,
        application_name: 'Python Pizza',
        theme_color: `#ed4337`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    'gatsby-plugin-postcss',
  ],
};
