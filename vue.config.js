
module.exports = {
  // 运行时包含编译器的版本
  runtimeCompiler: true,

  // 关闭ESLint编译
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.12.47:4000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  
 
} 