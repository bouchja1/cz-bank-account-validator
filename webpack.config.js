const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const env = require('yargs').argv.mode;

const libraryName = 'cz-bank-account-validator';

let plugins = [], outputFile;

if (env === 'production') {
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use : 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['', '.js']
  },
  plugins: plugins
};

module.exports = config;
