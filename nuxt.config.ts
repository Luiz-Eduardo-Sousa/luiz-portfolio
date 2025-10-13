// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      title: 'Luiz Eduardo | Portfólio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfólio de Luiz Eduardo - Desenvolvedor Full Stack' },
        { name: 'keywords', content: 'Luiz Eduardo, Portfólio, Desenvolvedor Full Stack, Vue.js, Nuxt.js, Tailwind CSS' }
      ],
    }
  },

modules: ['@nuxtjs/tailwindcss'],

  css: [
    '@/assets/css/main.css',
    'vuetify/styles',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

    compatibilityDate: '2025-07-15',
})
