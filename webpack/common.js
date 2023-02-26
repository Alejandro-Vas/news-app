/* eslint-disable import/no-extraneous-dependencies */
import { resolve as _resolve, join } from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { ProvidePlugin, ContextReplacementPlugin } from 'webpack';

const DIR = _resolve(__dirname);

export const entry = {
  index: ['./src/index.tsx'],
};
export const resolve = {
  modules: ['./src', './node_modules'],
  extensions: ['.ts', '.tsx'],
  alias: {
    assets: _resolve(DIR, 'src/assets'),
    components: _resolve(DIR, 'src/components'),
    constants: _resolve(DIR, 'src/constants'),
    hooks: _resolve(DIR, 'src/hooks'),
    pages: _resolve(DIR, 'src/pages'),
    react: join(DIR, 'node_modules', 'react'),
    theme: _resolve(DIR, 'src/theme'),
    interfaces: _resolve(DIR, 'src/interfaces'),
    store: _resolve(DIR, 'src/store'),
  },
};
export const plugins = [
  new CleanWebpackPlugin(),

  new CopyPlugin({
    patterns: [
      { from: _resolve(DIR, 'src/robots.txt'), to: '' },
      { from: _resolve(DIR, 'src/assets/og'), to: '' },
      { from: _resolve(DIR, 'src/manifest.json'), to: '' },
    ],
  }),

  new ProvidePlugin({
    React: 'react',
  }),

  new ContextReplacementPlugin(/moment[\\]locale$/, /ru/),
];
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      include: [
        join(DIR, 'src'),
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
};
