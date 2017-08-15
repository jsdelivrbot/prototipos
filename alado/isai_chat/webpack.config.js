/*jshint esversion: 6 */
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname + '/src/js',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js/, 
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            // host: 'localhost',
            // port: 621,
            //server: { baseDir: ['src'] },
            proxy: "http://localhost:3000",
            port: 621

        })
  ]
};