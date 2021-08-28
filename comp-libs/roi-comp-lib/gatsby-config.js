module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Monorepo Tutorial`,
    description: `A tutorial on setting up a Gatsby themes monorepo`,
    keywords: [`gatsby`],
    author: `Eric Howey`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `@roi/gatsby-theme-core`,
      options: {},
    },
  ],
}
