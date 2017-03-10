const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const LicenseWebpackPlugin = require('license-webpack-plugin')
const extractCSS = new ExtractTextPlugin('styles.css')

module.exports = [
  // client settings
  {
    entry: [
      './src/client.js',
      './src/styles/app.css'
    ],
    output: {
      path: path.join(__dirname, '..', 'public'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          include: /styles\/.+/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader'
            ],
            publicPath: '/'
          })
        }
      ]
    },
    plugins: [
      extractCSS,
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            require('postcss-import')(),
            require('autoprefixer')({
              browsers: ['last 2 versions']
            }),
            require('postcss-custom-properties')(),
            require('postcss-nested')()
          ]
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        compressor: {
          warnings: false
        },
        output: {
          comments: false
        }
      }),
      new LicenseWebpackPlugin({
        pattern: /^(.*)$/,
        filename: 'licenses.txt'
      })
    ]
  },

  // server settings
  {
    entry: [
      './src/server.js',
      './src/styles/app.css'
    ],
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          include: /styles\/.+/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader'
            ],
            publicPath: '/'
          })
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    plugins: [
      extractCSS,
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            require('postcss-import')(),
            require('autoprefixer')({
              browsers: ['last 2 versions']
            }),
            require('postcss-custom-properties')(),
            require('postcss-nested')()
          ]
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: false,
        compressor: {
          warnings: false
        },
        output: {
          comments: false
        }
      }),
      new LicenseWebpackPlugin({
        pattern: /^(.*)$/,
        filename: 'licenses.txt'
      })
    ]
  }
]
