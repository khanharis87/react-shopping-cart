var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['','.js', '.jsx'],
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel']
      }
    ]
  },
  entry: [
    'index.jsx'
  ],
  output: {
    filename: 'app.js',
    path: 'dist',

  }
}
