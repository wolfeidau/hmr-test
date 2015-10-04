var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = {
  entry: './index.js',
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]' },
    ]
  }
}

new WebpackDevServer(webpack(config), {
  hot: true,
  contentBase: __dirname,
  publicPath: config.output.publicPath
}).listen(3000, 'localhost');
