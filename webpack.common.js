const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: hacer NODE_ENV production

module.exports = {
	entry: './src/app.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [{
			test: /.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: {
					cacheDirectory: true
				}
			}]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		})
	]
}
