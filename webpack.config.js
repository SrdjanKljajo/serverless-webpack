const slsw = require("serverless-webpack");

module.exports = {
    entry: slsw.lib.entries,
    target: "node",
    mode: 'none',
    optimization: {
      minimize: true
    },
    performance: {
      hints: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/
        }
      ]
    },
  };