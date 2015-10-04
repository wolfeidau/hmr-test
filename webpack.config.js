module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]' },
    ]
  }
}
