/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common');

const envFile = require('../env/dev.json');

const DIR = path.resolve(__dirname, '../..');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, './build/'),
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    open: true,
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(DIR, 'client/src/index.html'),
      minify: true,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        CONFIG: JSON.stringify(envFile),
        USE_ANALYTICS: false,
      },
    }),
  ],

  output: {
    path: path.join(DIR, 'build'),
    publicPath: '/',
    filename: src => {
      if (src.runtime === 'firebase') {
        return 'firebase-messaging-sw.js';
      }
      return `${src.runtime}.${src.chunk.javascript}.js`;
    },
    sourceMapFilename: '[file].map',
  },

});
