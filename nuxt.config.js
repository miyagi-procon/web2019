import pkg from './package'
import { resolve } from 'path'

export default {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'みやぎプロコン',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~plugins/vue-scrollto' },
    { src: '~plugins/windowState', ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-stylus-resources-loader', resolve(__dirname, 'assets/stylus/**/*.styl')],
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
