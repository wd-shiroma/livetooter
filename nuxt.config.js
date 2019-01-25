const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'spa',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [ '~/assets/styles/mastodon.scss' ],
  plugins: [ '~/plugins/i18n.js' ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  axios: {},
  build: {
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
  },
  env: {
    hashTag: process.env.HASHTAG || 'livetooter',
    editTag: process.env.HASHTAG_EDITABLE === 'true',
    domain: process.env.DEFAULT_DOMAIN || 'mstdn.jp'
  },
  router: {
    base: process.env.URL_BASE || '/',
    middleware: 'i18n'
  },
  LoadingIndicator: {
    name: 'circle',
    color: 'white',
    background: '#2f323f'
  }
}
