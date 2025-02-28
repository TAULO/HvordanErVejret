import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-02-18",
    devtools: { enabled: true },
    vite: {
      plugins: [
          tailwindcss(),
      ]
    },
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            title: 'Hvordan Er Vejret',
        },
    },

})