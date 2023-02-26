/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common');

const DIR = path.resolve(__dirname, '../..');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    usedExports: true,
  },

  output: {
    path: path.join(DIR, 'build'),
    publicPath: '/',
    filename: (src) => `${src.runtime}.${src.chunk.contentHash.javascript}.js`,
    sourceMapFilename: '[file].map',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(DIR, 'client/src/index.html'),
      minify: true,
    }),
  ],

});
