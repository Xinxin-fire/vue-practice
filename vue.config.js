const path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        style: "@/style",
        views: "@/views"
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/style/_variables.scss";`
      },
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 192
          })
        ]
      }
    }
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
  },
};
