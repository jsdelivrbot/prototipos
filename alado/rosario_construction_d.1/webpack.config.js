var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: {
		app: "./static/rosario_construction_app/js/src/index.js"
	},
	output: {
		filename:"./static/rosario_construction_app/js/bundle.js"
	},
	watch: true,
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
	}
}
