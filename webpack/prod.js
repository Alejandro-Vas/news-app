/* eslint-disable import/no-extraneous-dependencies */
import { resolve, join } from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './common';

const DIR = resolve(__dirname, '../..');

export default merge(common, {
  mode: 'production',
  optimization: {
    usedExports: true,
  },

  output: {
    path: join(DIR, 'build'),
    publicPath: '/',
    filename: (src) => `${src.runtime}.${src.chunk.contentHash.javascript}.js`,
    sourceMapFilename: '[file].map',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: join(DIR, 'src/index.html'),
      minify: true,
    }),
  ],

});
