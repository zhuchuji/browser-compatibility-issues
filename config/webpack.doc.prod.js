const merge = require('webpack-merge');
const commonConfig = require('./webpack.doc.common');

const config = merge(commonConfig, {
  mode: 'production'
});

module.exports = config;
