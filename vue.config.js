const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === "production" ? "/CSC3007-assignment5/" : "/",
  outputDir: 'docs'
})
