// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: false,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      API_URL: "https://api.spacexdata.com/v4/launches/query",
    },
  },

  modules: [
    "@nuxt/image",
    "@vueuse/nuxt"
  ],
});
