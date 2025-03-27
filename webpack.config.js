const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "./"),
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "webworker",
  mode: "production",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        include: /node_modules/,
        test: /\.mjs$/,
        type: "javascript/auto",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ],
  },
};
