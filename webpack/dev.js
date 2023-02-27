/* eslint-disable import/extensions */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable import/no-extraneous-dependencies */
import { join, resolve } from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './common.js';

// eslint-disable-next-line no-underscore-dangle
const __dirname = resolve();

export default merge(common, {
  mode: 'development',

  devServer: {
    static: {
      directory: join(__dirname, './build/'),
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    open: true,
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'src/index.html'),
      minify: true,
    }),
  ],

  output: {
    path: join(__dirname, 'build'),
    publicPath: './',
    filename: (src) => `${src.runtime}.${src.chunk.javascript}.js`,
    sourceMapFilename: '[file].map',
    clean: true,
  },

});
