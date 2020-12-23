module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass")
      },
      scss: {
        additionalData: '$content:"hello world";'
      }
    }
  }
};
