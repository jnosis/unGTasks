const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = path.join(__dirname, '..', 'src');

module.exports = {
  entry: {
    background: path.join(srcDir, 'background.ts'),
    changelog: path.join(srcDir, 'changelog.ts'),
    // content_script: path.join(srcDir, 'content_script.ts'),
    // options: path.join(srcDir, 'options.ts'),
    // popup: path.join(srcDir, 'popup.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'async',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './static',
          to: './',
          globOptions: { ignore: '**/manifest.json' },
        },
      ],
    }),
  ],
};
