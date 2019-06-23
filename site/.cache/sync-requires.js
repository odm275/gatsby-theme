const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/oscarm/Documents/gatsby-themes-library/gatsby-theme/site/.cache/dev-404-page.js"))),
  "component---packages-gatsby-theme-livestream-src-pages-index-mdx": hot(preferDefault(require("/Users/oscarm/Documents/gatsby-themes-library/gatsby-theme/packages/gatsby-theme-livestream/src/pages/index.mdx"))),
  "component---src-pages-about-mdx": hot(preferDefault(require("/Users/oscarm/Documents/gatsby-themes-library/gatsby-theme/site/src/pages/about.mdx")))
}

