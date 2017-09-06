var path = require("path"); //
var webpack = require("webpack");

module.exports = {
    entry: "./app.js",
    output: {path: __dirname, filename: "bundle.js"},
    watch: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/, //if mathces js or jsx 
                loader: "babel-loader", //thencompile it using babel
                exclude: /node_modules/, //exclude node modules
                query: {
                    presets: ["es2015", "react"] //use the latest standars to compile regular js fromes6
                }
            }
        ]
    }
};