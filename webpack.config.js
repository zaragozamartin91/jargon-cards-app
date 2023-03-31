const path = require('path');

module.exports = {
  // The entry point file described above
  entry: './src/index.js',

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


  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',

  // Enables top level async
  experiments: {
    topLevelAwait: true
  },

  // Configuration for webpack-dev-server commands
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    compress: true,
    port: 9000,
  },
};