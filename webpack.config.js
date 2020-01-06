const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/_scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'src/assets'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  }
};