const merge = require('webpack-merge');
const commonConfig = require('./webpack.doc.common');

const config = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './docs'
  }
});

module.exports = config;
