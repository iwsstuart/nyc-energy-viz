// const webpack = require('webpack');
const path = require('path');
const resolve = require('path').resolve;

// const RewriteImportPlugin = require('less-plugin-rewrite-import');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    // 'babel-polyfill',
    './app/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'http://localhost:8080/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
      // From mapbox-gl-js README. Required for non-browserify bundlers (e.g. webpack):
      'mapbox-gl$': resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitWarning: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          // {
          //   loader: 'react-hot-loader',
          // },
          {
            loader: 'babel-loader',
            query: {
              presets: ['babel-preset-react', 'babel-preset-es2015'].map(require.resolve),
              plugins: [
                'babel-plugin-transform-class-properties',
                // 'babel-plugin-es6-promise',
              ].map(require.resolve),
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
        loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack-loader',
      },
      {
        test: /\.css/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader',
        }],
      },
    ],
  },

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     inject: 'body',
  //     template: 'app/index.html',
  //     filename: 'index.html',
  //     chunks: ['index'],
  //     chunksSortMode: 'dependency',
  //     env: process.env,
  //   }),
  // ],

  // plugins: [
  //   extractSass,
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       NODE_ENV: '"development"',
  //     },
  //   }),
  // ],
};
