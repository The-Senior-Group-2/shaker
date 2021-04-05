const path = require('path');

const entryPath = path.join(__dirname, '/client/src');
const outputPath = path.join(__dirname, '/client/dist');


module.exports = {
  entry: `${entryPath}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: `${outputPath}`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
