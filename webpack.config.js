const path = require('path')
const fs = require('fs')

const pages = fs
  .readdirSync(path.resolve(__dirname, "src", "entrypoints"))
  .map(filename => path.parse(filename).name)

// Example on multi-module webpack config: https://dev.to/marcinwosinek/tutorial-for-building-multipage-website-with-webpack-4gdk
module.exports = {
  // The entry point file described above
  entry: pages.reduce((config, page) => {
    config[page] = `./src/entrypoints/${page}.js`
    return config
  }, {}),

   // The location of the build folder described above
  output: {
    filename: "[name]_bundle.js",
    path: path.resolve(__dirname, "docs", "bundles"),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },


  // Enables top level async
  experiments: {
    topLevelAwait: true
  },

  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',

  // Configuration for webpack-dev-server commands
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    compress: true,
    port: 9000,
  },
}