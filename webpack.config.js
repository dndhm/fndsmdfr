const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,

  devtool: 'source-map',

  entry: {
    main: ['./src/index.js'],
  },
  devServer: {
    inline: true,
    port: 4000,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new CopyWebpackPlugin([ { from: 'public/index.html', to: 'index.html' } ]),
  ],
  postcss: function () {
    return [
      require('precss'),
      require('autoprefixer'),
    ];
  },
};

