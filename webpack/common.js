/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const DIR = path.resolve(__dirname, '../..');

module.exports = {
  entry: {
    index: ['./client/src/index.jsx'],
    firebase: ['./client/src/firebase-messaging-sw.js'],
  },

  resolve: {
    modules: ['./client/src', './node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve(DIR, 'client/src/assets'),
      components: path.resolve(DIR, 'client/src/components'),
      hooks: path.resolve(DIR, 'client/src/hooks'),
      pages: path.resolve(DIR, 'client/src/pages'),
      react: path.join(DIR, 'node_modules', 'react'),
      scripts: path.resolve(DIR, 'client/src/scripts'),
      theme: path.resolve(DIR, 'client/src/theme'),
      utils: path.resolve(DIR, 'client/src/utils'),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      linkType: 'text/css',
    }),

    new CopyPlugin({
      patterns: [
        { from: path.resolve(DIR, 'client/src/robots.txt'), to: '' },
        { from: path.resolve(DIR, 'client/src/assets/favicons'), to: '' },
        { from: path.resolve(DIR, 'client/src/scripts'), to: 'scripts' },
        { from: path.resolve(DIR, 'client/src/assets/og'), to: 'og' },
        // { from: path.resolve(DIR, 'client/src/firebase-messaging-sw.js'), to: '' },
        { from: path.resolve(DIR, 'client/src/manifest.json'), to: '' },
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
          path.join(DIR, 'client/src'),
        ],
        exclude: [
          path.join(DIR, 'client/src/scripts'),
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
        exclude: [
          /car-scheme/,
        ],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
              url: false,
              modules: {
                localIdentName: '[local]_[hash:base64:5]',
                getLocalIdent: (context, _localIdentName, localName) => {
                  if (/\.global\./i.test(context.resourcePath)) {
                    return localName;
                  }
                  return null;
                },
              },
            },
          },
        ],
      },
    ],
  },

};
