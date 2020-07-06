const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			'DOM': path.resolve(__dirname, 'mDOM/index.js')
		}
	},
	devServer: {
		stats: 'errors-only',
		contentBase: path.resolve(__dirname, 'public')
	}
};