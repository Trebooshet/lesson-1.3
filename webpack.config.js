const path = require('path')
// const {CleanWebpackPlugin} = require('clean-webpack-plugin')
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
    // new CleanWebpackPlugin(),
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
        use: ['style-loader', 'css-loader']

      },
      {
        test: /\.(png | svg | jpg)/,
        use: ['file-loader']

      },
      {
        test: /\.(ttf | woff | woff2)/,
        use: ['file-loader']

      }
    ]
  }
}
