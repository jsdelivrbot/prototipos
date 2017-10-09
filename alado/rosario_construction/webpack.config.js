var webpack = require("webpack");
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: {
		app: "./src/index.js"
	},
	output: {
		filename:"build/bundle.js",
        sourceMapFilename: "build/bundle.map"
	},
    devtool: '#source-map',

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			}
		]
	},
	watch: true,
	plugins: [
		new BrowserSyncPlugin({
		  	// browse to http://localhost:3000/ during development, 
		 	// ./public directory is being served 
			host: 'localhost',		
		  	port: 3000,
		  	server: { baseDir: [''] }
		})
	]
}
