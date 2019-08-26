/*** webpack.config.js ***/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var autoprefixer = require('autoprefixer')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "example/src/index.html"),
  filename: "./index.html"
});
module.exports = {
  entry: path.join(__dirname, "example/src/index.js"),
  output: {
    path: path.join(__dirname, "example/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      exclude: /node_modules/
    },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              },
            }
          },
          'less-loader',
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  Browserslist: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            }
          }
        ]
      },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3001
  }
};