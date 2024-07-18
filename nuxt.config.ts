// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/sitemap',
  ],
  // axios: {
  //   baseURL: 'http://localhost:3000/api', // Adjust this to your backend API
  // },
  ssr: true,
  sitemap: {
    hostname: 'https://life-academy.netlify.app',
    routes: [
      '/',
      '/investment',
    ]
  },
  head: {
    titleTemplate: 'Life Academy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Life Academy - Essential skills for a better life' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
