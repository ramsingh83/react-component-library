/**
 * Configuration for production build.
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackAutoInject = require('webpack-auto-inject-version');
const commonPaths = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    filename: `${commonPaths.jsFolder}/[name].bundle.js`,
    path: commonPaths.outputPath,
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new WebpackAutoInject({
      PACKAGE_JSON_PATH: './package.json',
      components: {
        AutoIncreaseVersion: false,
        InjectAsComment: true
      },
      componentsOptions: {
        InjectAsComment: {
          tag: 'Build date: {date}'
        }
      }
    }),
    new CleanWebpackPlugin([commonPaths.outputPath.split('/').pop()], {
      root: commonPaths.root
    }),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/[name].css`,
      chunkFilename: '[id].css'
    })
  ],
  devtool: 'source-map'
};
