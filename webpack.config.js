const path = require('path')

const javascript = {
  test: /\.(js)$/,
  use: [{
    loader: 'babel-loader',
    options: { presets: ['es2015'] }
  }]
}

module.exports = {
  entry: './public/src/javascripts/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/public'
  },
  module: {
    rules: [javascript]
  }
}
