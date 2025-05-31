const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "../public"),
    },
    compress: true,
    port: 8080,
    open: true,
    hot: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "../public"),
          to: path.join(__dirname, "../dist"),
          globOptions: {
            ignore: ["**/index.html"], 
          },
        },
      ],
    }),
  ],
};
