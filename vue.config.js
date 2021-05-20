/*
 * @Description:
 * @Author: mlcheng2
 * @Date: 2021-05-20 15:23:26
 */
const webpackConfig = require('./build/webpack.config')
const buildUtils = require('./build/utils')
module.exports = {
  publicPath: webpackConfig.assetsPublicPath,
  outputDir: webpackConfig.assetsRoot,
  assetsDir: webpackConfig.assetsSubDirectory,
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,
  productionSourceMap: false, // 生产环境关闭 sourceMap
  pages: webpackConfig.spaMode ? { index: buildUtils.getSpaPage() } : buildUtils.getPages(),
  devServer: {
    port: 8089
  },
  css: {
    loaderOptions: {
      less: {
        // 开启less 需要
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  chainWebpack(config) {
    config.when(process.env.NODE_ENV !== 'development', config => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          },
          elementui: {
            name: 'chunk-elementui', // split elementui into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          }
        }
      })
    })

    // 集成 webpack-bundle-analyzer
    config.when(process.env.use_analyzer, config => {
      config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    })
  }
}
