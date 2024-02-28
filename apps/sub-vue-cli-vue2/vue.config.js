const { defineConfig } = require('@vue/cli-service');
const { name } = require('./package.json');
module.exports = defineConfig({
	publicPath:'./',
	transpileDependencies: true,
	devServer: {
		port: 8080,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		client: {
			overlay: false
		}
	},
	chainWebpack: (config) => config.resolve.symlinks(false),
	configureWebpack: {
		output: {
			// 把子应用打包成 umd 库格式
			library: `${name}-[name]`,
			libraryTarget: 'umd',
			chunkLoadingGlobal: `webpackJsonp_${name}`
		}
	}
});
