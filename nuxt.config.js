export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'quwi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      home: false,
    },
    strategies: {
      cookie: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: false,
          user: false
        },
        tokenType: '',
        autoFetchUser: false,
        token: {
          property: 'token',
          required: true,
          maxAge: 99999,
          global: true,
          type: 'Bearer'
        }
      },
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: 'https://api.quwi.com/v2/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'defu'
    ]
  }
}
