const path = require("path")

module.exports = {
  entry: {
    'react-products-filters': "./scripts/index.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "assets")
  }
}