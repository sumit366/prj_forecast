var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: {
    // Add as many entry points as you have container-react-components here
    main: './client/app',
    vendors: ['react'],
  },

  output: {
      path: path.resolve('./project_forecasting/static/bundles/local/'),
      filename: "[name].js"
  },

  externals: [
  ], // add all vendor libs

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendors.js' }),
    new BundleTracker({filename: './webpack-stats.json'}),
  ], // add all common plugins here

  module: {
    loaders : [
        {
          test : /\.jsx?$/,
          exclude : /node_modules/,
          loader : 'babel-loader'
        }
      ]
  },

  resolve: {
    moduleExtensions: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
}