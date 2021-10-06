const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // allows for omission of file extensiosn when importing
  },


  devServer: {
    static: {
      publicPath: '/',
      directory: path.resolve(__dirname, 'build')
    },
    port: 8080,
    proxy: {
      '*': 'http://localhost:3000/',
    }
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },


  // with this plugin, no need to specify script tag in html file
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, './src/index.html'),
  //   }),
  // ],
}
