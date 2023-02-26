/* eslint-disable import/no-extraneous-dependencies */
import { resolve, join } from 'path';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import common from './common';

const DIR = resolve(__dirname);

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
      template: join(DIR, 'src/index.html'),
      minify: true,
    }),
  ],

  output: {
    path: join(DIR, 'build'),
    publicPath: '/',
    filename: (src) => `${src.runtime}.${src.chunk.javascript}.js`,
    sourceMapFilename: '[file].map',
  },

});
