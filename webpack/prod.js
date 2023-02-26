/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SentryCliPlugin = require('@sentry/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./common');
const envFile = require('../env/prod.json');

const DIR = path.resolve(__dirname, '../..');

const hostName = envFile.HOST || '';

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    usedExports: true,
  },

  output: {
    path: path.join(DIR, 'build'),
    publicPath: '/',
    filename: src => {
      if (src.runtime === 'firebase') {
        return 'firebase-messaging-sw.js';
      }
      return `${src.runtime}.${src.chunk.contentHash.javascript}.js`;
    },
    sourceMapFilename: '[file].map',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(DIR, 'client/src/index.html'),
      hostName,
      minify: true,
    }),

    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, '../../client/webpack/report.html'),
      openAnalyzer: false,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        CONFIG: JSON.stringify(envFile),
        // 0 для dev-стенда, 1 для prod
        USE_ANALYTICS: process.env.USE_ANALYTICS,
        SENTRY_ENV: JSON.stringify(process.env.SENTRY_ENV),
      },
    }),

    // Отправка source-map в Sentry только на проде
    ...(process.env.SENTRY_ENV === 'Production')
      ? [new SentryCliPlugin({
        url: 'https://sentry.carprice.ru/',
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: process.env.SENTRY_ORG,
        project: process.env.CI_PROJECT_NAME,
        include: './build',
        ignore: ['node_modules'],
      })] : [],
  ],

});
