/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Sarah Majeed",
    author: "Sarah Majeed",
    image: "/src/images/image.jpg",
    description: "Web Developer",
    twitterUsername: "sarahh_dev",
    githubUsername: "Sarahmdawood",
    linkedinUsername: "sarahmajeed",
    mediumUsername: "@sarahmajeed",
  },
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    "gatsby-transformer-remark",
  ],
}
