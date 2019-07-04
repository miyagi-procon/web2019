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
      {
        hid: 'description',
        name: 'description',
        content:
          '「みやぎプロコン」は、宮城県のこどもたちにものづくりの楽しさや面白さを体験してほしい！という想いから始まったプログラミングコンテストです。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'みやぎプロコン'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://miyagi-procon.jp/'
      },
      { hid: 'og:title', property: 'og:title', content: 'みやぎプロコン' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '「みやぎプロコン」は、宮城県のこどもたちにものづくりの楽しさや面白さを体験してほしい！という想いから始まったプログラミングコンテストです。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://miyagi-procon.jp/ogp.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~assets/stylus/base.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: '~plugins/vue-scrollto' },
    { src: '~plugins/windowState', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-stylus-resources-loader',
      resolve(__dirname, 'assets/stylus/**/*.styl')
    ],
    'nuxt-fontawesome'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
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
