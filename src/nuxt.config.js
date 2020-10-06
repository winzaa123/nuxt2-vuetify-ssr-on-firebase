const pkg = require('./package')


module.exports = {
  // mode: 'universal', ssr : true (Default) ;; ssr: false // for SPA

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // 'ant-design-vue/dist/antd.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '@/plugins/antd-ui', mode: 'server' }
  ],

  /*
  ** Nuxt.js modules
  */
 buildModules: [
  '@nuxtjs/vuetify'
  ],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  vuetify: {
    materialIcons: false,
    theme: {
      dark: false,
      default: 'white',
      primary: '#03A9F4',
      secondary: '#009688',
      accent: '#E91E63',
      error: '#f44336',
      warning: '#FDD835',
      info: '#2196f3',
      success: '#4caf50'
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
 buildDir: '.nuxt',
  build: {
    publicPath: '/assets/',

    babel: {
      presets({ isServer }) {
      //   let targets = isServer ? { node: '10' } : { ie: '11' }
        return [
          [ require.resolve('@nuxt/babel-preset-app'), 
            { 
              // targets
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            } 
          ]
        ]
      },
      'env': {
        'production': {
          'plugins': []
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
