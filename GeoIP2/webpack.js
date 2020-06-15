const path = require("path");

module.exports = {
  // mode: "production",
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  entry: {
    "asset-vendor": "./index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // {
      //   test: /\.py$/,
      //   loader: 'py-loader',
      //   options: {
      //     compiler: 'jiphy'
      //   }
      // }
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../assets"),
  },
  node: {
    fs: "empty",
  },
};
