const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js"
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }]
  },
  plugins: [new HtmlWebpackPlugin()]
};
