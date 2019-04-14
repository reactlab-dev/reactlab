import path from 'path';
import webpack from 'webpack';
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config: webpack.Configuration = {
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
    noParse: [/pg\/lib\/native/],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  plugins: [new CopyWebpackPlugin([{ from: 'config', to: 'config' }])],
};

export default config;
