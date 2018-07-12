const path = require('path')
const HWP = require('html-webpack-plugin')

process.env.NODE_ENV = 'development'
process.env.BABEL_ENV = 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sass)$/,
        exclude: /(node_modules)/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|jpge|gif|svg|bmp)$/i,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins: [
    new HWP({
      template: './public/index.html',
    })
  ],
  devServer: {
    //contentBase: path.join(__dirname, '../public'),
    port: 3000,
    historyApiFallback: true,
    //noInfo: true,
    overlay: true
  }
}
