// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    css: "/<rootDir>/assets/css",
  },

  css: ['~/assets/css/main.css'],

  $meta: [
    {
      "name": "viewport",
      "content": "width=device-width, initial-scale=1"
    },
    {
      "charset": "utf-8"
    }
  ],

  compatibilityDate: "2024-08-14",
})