/* eslint-disable import/no-import-module-exports */
/* eslint-disable import/no-extraneous-dependencies */
import { resolve as _resolve, join } from 'path';
import CopyPlugin from 'copy-webpack-plugin';

// eslint-disable-next-line no-underscore-dangle
const __dirname = _resolve();

export default {
  entry: {
    index: ['./src/index.tsx'],
  },
  resolve: {
    modules: ['./src', './node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      assets: _resolve(__dirname, 'src/assets'),
      components: _resolve(__dirname, 'src/components'),
      constants: _resolve(__dirname, 'src/constants'),
      hooks: _resolve(__dirname, 'src/hooks'),
      pages: _resolve(__dirname, 'src/pages'),
      react: join(__dirname, 'node_modules', 'react'),
      theme: _resolve(__dirname, 'src/theme'),
      interfaces: _resolve(__dirname, 'src/interfaces'),
      store: _resolve(__dirname, 'src/store'),
    },
    plugins: [
      // new CopyPlugin({
      //   patterns: [
      //     { from: _resolve(__dirname, './src/robots.txt'), to: '' },
      //     { from: _resolve(__dirname, './src/assets/og'), to: '/og' },
      //   ],
      // }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [
          join(__dirname, 'src'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: _resolve('./tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
