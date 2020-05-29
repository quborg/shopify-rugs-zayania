const path = require("path")

module.exports = {
  entry: {
    'products-filters': "./scripts/index.js"
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