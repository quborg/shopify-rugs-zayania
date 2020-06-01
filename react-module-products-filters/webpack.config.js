const path = require("path")

module.exports = {
  mode: "production",
  entry: {
    'react-products-filters': "./src/index.js"
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
    path: path.resolve(__dirname, "public")
  }
}