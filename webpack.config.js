const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const env = require('yargs').argv.mode;

const libraryName = 'cz-bank-account-validator';

let plugins = [], outputFile;

if (env === 'node') {
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    library: libraryName,
    libraryTarget: 'umd',
    path: __dirname + '/lib',
    filename: outputFile,
    globalObject: 'this',
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
