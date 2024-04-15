// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],

  fonts: {
    families: [
      { name: 'Plus Jakarta Sans', provider: 'google' },
      { name: 'Playfair Display', provider: 'google' },
    ],
    experimental: {
      // You can also enable support for processing CSS variables for font family names.
      // This may have a performance impact.
      processCSSVariables: true,
      // You can enable support for adding preload links to the initially rendered HTML.
      // There is a known upstream issue with rendering unaesthetic links with a `../` in the URL.
      addPreloadLinks: true
    }
  }
});