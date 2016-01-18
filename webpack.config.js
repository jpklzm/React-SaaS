var webpack = require('webpack');
module.exports = {
    entry: [
      'webpack/hot/only-dev-server',
      "./src/app.jsx"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] }},
            { test: /\.css$/, loader: "style!css"}
        ]
    },
    // resolve: {
    //   root: path.resolve(__dirname) + '/src'
    // },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
