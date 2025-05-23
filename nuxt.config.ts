import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      title: 'Foxy Web',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/imgs/fox.svg' },]
    }
  }
});