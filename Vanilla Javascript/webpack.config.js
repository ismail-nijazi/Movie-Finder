const path = require('path');

module.exports = {
	entry: './dev/JS/Controler.js',
	output: {
		path: path.resolve(__dirname, './production'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'production'),
		hot: true
	},
}