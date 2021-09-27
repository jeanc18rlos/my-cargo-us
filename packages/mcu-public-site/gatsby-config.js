/* eslint-disable node/no-path-concat */
module.exports = {
  siteMetadata: {
    title: "My Cargo US",
    description: "One Cargo app to rule them all.",
    author: "@jeanrojas",
    siteUrl: "https://mycargo.us/",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-ts-config",
      options: {
        configDir: "config",
        tsNode: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
        ignore: ["**/.*"],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-json",
      options: {
        typeName: ({ node, object, isArray }) => object.content_type,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/favicon.svg",
      },
    },
    //"mcu-private-site",
    //"mcu-marketplace-site",
    // 'gatsby-plugin-gatsby-cloud'
  ],
}
