const { resolve } = require('path');
const package = require('./package.json');
const config = require('./config/default.json');

const isDev = !['production', 'test'].includes(process.env.NODE_ENV);

module.exports = {
  dev: isDev,
  srcDir: resolve(__dirname, './client'),
  router: { middleware: ['auth'] },
  // router: {
  //   middleware: [
  //     'feathers',
  //   ]
  // },
  env: { apiURL: process.env.API_URL || `http://localhost:${config.port}` },
  
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: `${package.name}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: `${package.description}` 
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css/normalize.css',
    './client/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/feathers-vuex.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios'
    'nuxt-client-init-module'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  /*
  ** Build configuration
  */
  build: {
    transpile: ['feathers-vuex'],
    /*
    ** You can extend webpack config here
    */
    //  extend(config, ctx) {}

    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })

    //     const vueLoader = config.module.rules.find(
    //       ({loader}) => loader === 'vue-loader')
    //     const { options: {loaders} } = vueLoader || { options: {} }
        
    //     if (loaders) {
    //       for (const loader of Object.values(loaders)) {
    //         changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
    //       }
    //     }

    //     config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
    //   }
    // }
  }

};
