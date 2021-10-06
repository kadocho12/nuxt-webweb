export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nd_nuxt',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swiper.js', mode: 'client' },
    '~plugins/vue-scrollto',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '@/components/',
      pathPrefix: false
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto+Sans+JP': [400, 500, 700],
          display: 'swap',
        }
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader'
  ],

  webfontloader: {
    google: {
      families: [
        'Roboto:300,400,500,700',
        'Noto+Sans+JP:400,500,700'
      ]
    }
  },

  styleResources: {
    scss: [
      '@/assets/scss/foundation/_variables.scss',
      '@/assets/scss/foundation/_mixins.scss',
      '@/assets/scss/foundation/_icon.scss',
      '@/assets/scss/foundation/_keyframes.scss',
      '@/assets/scss/foundation/_base.scss',
      '@/assets/scss/foundation/_reset.scss',
      '@/assets/scss/layout/_l-container.scss',
      '@/assets/scss/layout/_l-main.scss',
      '@/assets/scss/layout/_l-root-container.scss',
      '@/assets/scss/layout/_l-spacer.scss',
      '@/assets/scss/layout/_l-grid.scss',
      '@/assets/variables.scss',
    ]
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
}
