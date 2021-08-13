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
  }
};