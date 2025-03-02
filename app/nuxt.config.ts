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
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
                { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
                { rel:"shortcut icon", href:"/favicon/favicon.ico" },
                { rel:"apple-touch-icon", sizes:"180x180", href:"/favicon/apple-touch-icon.png" },
                { rel:"manifest", href:"/favicon/site.webmanifest" },
            ]
        },
    },
})