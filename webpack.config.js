var path = require('path');

module.exports = {
  entry: './client/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '/server/public/js/'),
    filename: 'bundle.js',
    publicPath: 'server/public/js/',
  }
};
