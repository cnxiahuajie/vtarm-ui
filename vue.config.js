const path = require('path')

// 拼接路径
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    lintOnSave: false,
    devServer: {
        port: 80,
        disableHostCheck: true,
        open: true,
        hot: true,
        host: '0.0.0.0',
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://192.168.229.141:8080', // 设置你调用的接口域名和端口号
                changeOrigin: true, // 跨域
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    productionSourceMap: false, // 生产环境不需要source map
    // webpack 设置
    // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
    configureWebpack: config => {
        // 非开发环境
        if (process.env.NODE_ENV !== 'development') {
            config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
            config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
            config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
        }
    },
    chainWebpack: config => {
        // 重新设置 alias
        config.resolve.alias
            .set('@', resolve('src'))
    }
}
