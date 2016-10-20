var path = require('path');
var webpack = require("webpack");

module.exports = {
  context: __dirname + '/app',
  entry: [
    'webpack-hot-middleware/client?http://localhost:8080/',
    './application.js'
  ],
  output: {
    path: __dirname + '/www/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['stage-0','es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test   : /\.css$/,
        loaders: ['style', 'css', 'resolve-url']
      },
      {
        test   : /\.scss$/,
        loaders: ['style', 'css', 'less', 'resolve-url', 'sass?sourceMap']
      },
      {
        test: /\.(png|jpg|jpeg|gif|otf|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  postcss: function (webpack) {
    return [
        autoprefixer,
        precss,
        postcssImport({
          addDependencyTo: webpack
        })
    ];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
