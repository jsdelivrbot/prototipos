var webpack = require("webpack");
var path = require('path');

module.exports = {
	entry: './src/js/index.js',
  	output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js',
			publicPath: '/public'
		},

		module: {
			loaders: [
				{
			  	test: /\.jsx?$/,
			  	exclude: /(node_modules)/,
			  	loader: 'babel-loader',
					query: {
						presets: ['react', 'es2015']
					}
				},
				{
			  	test: /\.css$/,
			  	loaders: ['style-loader', 'css-loader']
				},
				{
			  	test: /\.(jpe?g|png|gif|svg)$/i,
			  	loaders: ['file-loader', 'image-webpack-loader']
				}
			]
		},
}