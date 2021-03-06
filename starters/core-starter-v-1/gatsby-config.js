module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Monorepo Tutorial`,
    description: `A tutorial on setting up a Gatsby themes monorepo`,
    keywords: [`gatsby`],
    author: `Eric Howey`,
  },
  plugins: [
    {
      resolve: `@roi/gatsby-theme-core-v-1`,
      options: {
        basePath: '/blog'
      },
    },
  ],
}
