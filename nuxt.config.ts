// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "radix-vue/nuxt", "nuxt-icon"],
  css: ["~/assets/css/tailwind.css"],
});
