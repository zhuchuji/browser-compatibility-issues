const path = require('path');

const config = {
  entry: {
    main: './src/index.js'
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = config;
