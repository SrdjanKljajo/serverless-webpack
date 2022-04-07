
module.exports = {
    entry: './graphql.js',
    target: "node",
    mode: 'none',
    optimization: {
      minimize: true
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