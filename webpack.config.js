module.exports = {
  // 1. use src/index.js as the entry point to bundle all JS files imported here
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },

  // 2. bundled source code files will become bundle.js
  output: {
    path: __dirname + '/dist',
    publicPath: "/",
    filename: 'bundle.js'
  },

  // 3. the dist folder will serve our app to the browser
  devServer: {
    contentBase: './dist'
  }
}