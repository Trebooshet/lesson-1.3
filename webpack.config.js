const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    publicPath: './'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['index.html', 'bundle.js', 'bundle.css']
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css', 
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      filename: 'index.html' 
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'images' },
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']

      },
    ]
  }
}
