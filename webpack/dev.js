/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common');

const DIR = path.resolve(__dirname);

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
      template: path.join(DIR, 'src/index.html'),
      minify: true,
    }),
  ],

  output: {
    path: path.join(DIR, 'build'),
    publicPath: '/',
    filename: (src) => `${src.runtime}.${src.chunk.javascript}.js`,
    sourceMapFilename: '[file].map',
  },

});
