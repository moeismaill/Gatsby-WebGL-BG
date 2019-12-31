module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#000000","theme_color":"#f7f0eb","display":"standalone","icon":"src/images/gatsby-icon.png"},
    },{
      plugin: require('../node_modules/@raae/gatsby-remark-oembed/gatsby-browser.js'),
      options: {"plugins":[],"usePrefix":["oembed","video"],"providers":{"exclude":["Reddit"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[],"excludePattern":"(excluded-link|external)"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
