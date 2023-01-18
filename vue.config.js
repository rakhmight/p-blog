const CopyWebpackPlugin = require('copy-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const CrossoriginWebpackPlugin = require('crossorigin-webpack-plugin')
const CorsProxyWebpackPlugin = require('crossorigin-webpack-plugin')

// let register = require('cors-proxy-webpack-plugin/dist/runtime');
// register();

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'https://instagram.ftas1-1.fna.fbcdn.net/'
  },
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve:{
      fallback: {
      } 
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: './src/plugins/gsap' , to: 'plugins' }
        ],
      }),
      new NodePolyfillPlugin(),
      new CrossoriginWebpackPlugin(),
      new CorsProxyWebpackPlugin()
    ]
  }
})
