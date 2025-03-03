export const useServiceStore = defineStore('useService', () => {
    const services = ref({
        spotify: {
            url: "https://open.spotify.com/show/4na66G7LvfiknTfzdy1U1t?si=13de0a5ac62e4882",
        },
        youtube: {
            url: "https://www.youtube.com/@HvordanErVejret",
        },
        applePodcasts: {
            url: "https://podcasts.apple.com/dk/podcast/hvordan-er-vejret/id1751777919"
        },
        linkedin: {
            url: ""
        },
        tiktok: {
            url: ""
        }
    });

    const getServices = computed(() => services.value);

    function openServiceInNewTab(url?: string) {
        if (!url) throw createError(`${url} is not a valid URL`);

        window.open(url, "_blank");
    }

    return {
        getServices,
        openServiceInNewTab
    }
})