// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: "static",
    devtools: { enabled: true },
    modules: ["@nuxtjs/google-fonts"],
    css: ["~/assets/css/main.css"],
    googleFonts: {
        families: {
            Roboto: true,
            "Josefin+Sans": true,
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
                ital: [100],
            },
        },
    },
    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
});
