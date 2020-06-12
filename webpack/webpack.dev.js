/**
 * Webpack configuration for development build.
 */

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js'
  },
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
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
  }
};
