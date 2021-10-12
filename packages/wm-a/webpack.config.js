const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd',
    },
    globalObject: 'this'
  },
  externals: {
    "lodash": {
      "root": "_",
      "commonjs": "lodash",
      "commonjs2": "lodash",
      "amd": "lodash",
    }
  }
}