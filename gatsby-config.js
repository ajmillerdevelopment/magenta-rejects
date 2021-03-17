module.exports = {
  siteMetadata: {
    title: "magenta-rejects",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "",
      },
    },
  ],
};
