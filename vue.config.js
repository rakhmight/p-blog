const CopyWebpackPlugin = require('copy-webpack-plugin');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: './src/plugins/gsap' , to: 'plugins' }
        ],
      })
    ]
  }
})
