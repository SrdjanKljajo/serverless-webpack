module.exports = {
    entry: slsw.lib.entries,
    target: "node",
    mode: 'none',
    optimization: {
      minimize: false
    },
    performance: {
      hints: false
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