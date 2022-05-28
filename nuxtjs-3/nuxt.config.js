import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [['@storyblok/nuxt', { accessToken: 'NKTXbnJKkSyy1rYi68dXyQtt' }]],
  app: {
    head: {
      script: [{ src: 'https://cdn.tailwindcss.com' }],
    },
  },
})
