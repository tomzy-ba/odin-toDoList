const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,  // Target files with .css extension
        use: ['style-loader', 'css-loader'], // Loaders to use
      },
    ],
},
};