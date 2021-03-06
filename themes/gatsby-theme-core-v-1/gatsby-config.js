require("source-map-support").install();
require("ts-node").register({
  transpileOnly: true,
  files: true,
  ignore: [
    "(?:^|/)node_modules/(?!@roi\/gatsby-theme-core-v-1)",
    "(?:^|/).cache/",
    "(?:^|/)public/",
  ],
});

module.exports = require("./gatsby/gatsby-config");
