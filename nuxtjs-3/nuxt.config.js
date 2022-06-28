import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [['@storyblok/nuxt', { accessToken: 'd6IKUtAUDiKyAhpJtrLFcwtt' }]],
  app: {
    head: {
      script: [{ src: 'https://cdn.tailwindcss.com' }],
    },
  },
})
