/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const DIR = path.resolve(__dirname);

module.exports = {
  entry: {
    index: ['./client/src/index.tsx'],
  },

  resolve: {
    modules: ['./src', './node_modules'],
    extensions: ['.ts', '.tsx'],
    alias: {
      assets: path.resolve(DIR, 'src/assets'),
      components: path.resolve(DIR, 'src/components'),
      constants: path.resolve(DIR, 'src/constants'),
      hooks: path.resolve(DIR, 'src/hooks'),
      pages: path.resolve(DIR, 'src/pages'),
      react: path.join(DIR, 'node_modules', 'react'),
      theme: path.resolve(DIR, 'src/theme'),
      interfaces: path.resolve(DIR, 'src/interfaces'),
      store: path.resolve(DIR, 'src/store'),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),

    new CopyPlugin({
      patterns: [
        { from: path.resolve(DIR, 'src/robots.txt'), to: '' },
        { from: path.resolve(DIR, 'src/assets/og'), to: '' },
        { from: path.resolve(DIR, 'src/manifest.json'), to: '' },
      ],
    }),

    new webpack.ProvidePlugin({
      React: 'react',
    }),

    new webpack.ContextReplacementPlugin(/moment[\\]locale$/, /ru/),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.join(DIR, 'src'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/png',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },

};
