const devmode = process.env.NODE_ENV == 'production' ? false : true;
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: devmode ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.s?[ca]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/img/'
            }
          }
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devServer: {
    contentBase: '/dist/',
    port: 9001,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/html/index.html'}),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    })
  ]
};
  // contentBase: path.join(__dirname, 'dist'),
  // 
  // hot: true,
  // compress: true,
  // port: 9000,
  // open: true,