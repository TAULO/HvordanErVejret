async function getSpotifySomething() {
    const { access_token, expires_in } :any = await getSpotifyBearerToken()

    return await $fetch("https://api.spotify.com/v1/shows/4na66G7LvfiknTfzdy1U1t", {
        method: "GET",
        headers: {
            authorization: `Bearer ${access_token}`,
        }
    });
}

async function getSpotifyBearerToken() {
    console.log("Going to set spotify access token...");

    const body: URLSearchParams = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID as string,
        client_secret: process.env.CLIENT_SECRET as string,
    });

    const res: any = await $fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
    });

    return res;
}

export default defineEventHandler(async (event) => {
    return await getSpotifySomething();
});
