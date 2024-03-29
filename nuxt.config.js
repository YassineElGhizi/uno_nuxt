export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Supero',
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:300,400,400i,600,700,800,900'},
      { rel: 'stylesheet', href: '/css/metisMenu.min.css'},
      { rel: 'stylesheet', href: '/css/lite-purple.min.css'},
      { rel: 'stylesheet', href: '/css/splide.min.css'},
      { rel: 'stylesheet', href: '/css/app2.css'},
    ],

    script: [
      { src: "/js/common-bundle-script.js", body : true},
      { src: "/js/echart.options.min.js", body : true},
      { src: "/js/dashboard.v1.script.js", body : true},
      { src: "/js/script01.js", body : true},
      { src: "/js/script02.js", body : true},
      { src: "/js/script02.js", body : true},
      { src: "/js/script.js", body : true},
      { src: "/js/tooltip.script.js", body : true},
      { src: "/js/script_2.js", body : true},
      { src: "/js/feather.min.js", body : true},
      { src: "/js/metisMenu.min.js", body : true},
      { src: "/js/layout-sidebar-vertical.js", body : true},
      { src: "/js/customizer.script.js", body : true},
      { src: "/js/script03.js", body : true},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~plugins/vue-slider-component.js', ssr: false},
    '~/plugins/clickaway',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Font Awesome
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    components: 'fa',
    icons: {
      solid:true,
      brands:true
    },
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-highcharts',
    'vue-sweetalert2/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
    baseURL: process.env.API_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
