const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
    entry: './src/browser/index.js', // Where the app starts
    output: {
        path: path.resolve(__dirname, 'public'), // creating a folder name public in the courent directory
        filename: 'bundle.js', // a file that will be create inside the public folder
        publicPath: "/public"
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader" },
            { test: /\.(s*)css$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]},
            { test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: ['file-loader' ]}
        ]
    },
    watchOptions: {
      poll: true,
      ignored: /node_modules/
    },
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true"
        })
    ]
}

const serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: __dirname,
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      rules: [
        { test: /\.(js)$/, use: 'babel-loader' }
      ]
    },
    mode: 'production',
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      })
    ]
  }
  
  module.exports = [browserConfig, serverConfig]