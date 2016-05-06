var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname),
  entry: './app/app.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'static'),
    publicPath: 'http://localhost:8080/static'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
      include: path.join(__dirname, 'app')
    }]
  }
};
