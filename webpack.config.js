var ModuleConcatenationPlugin = require("webpack").optimize
  .ModuleConcatenationPlugin;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  plugins: [new ModuleConcatenationPlugin()],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: "", //source-map
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      /*  {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.json"
        }
      },*/
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
