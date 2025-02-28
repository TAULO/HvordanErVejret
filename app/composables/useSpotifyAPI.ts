import { useFetch } from "#imports";

interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
}

async function getSpotifyShows(bearerToken: string): Promise<any> {
    return useFetch("api.spotify.com/v1/shows/4na66G7LvfiknTfzdy1U1t", {
        method: "GET",
        headers: {
            authorization: `Bearer ${bearerToken}`,
        }
    });
}

async function getSpotifyAccessToken(): Promise<any> {
    const body: URLSearchParams = new URLSearchParams({
        client_id: process.env.CLIENT_ID as string,
        client_secret: process.env.CLIENT_SECRET as string,
        grant_type: "client_credentials",
    })

    return useFetch("accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
    });
}

export const useSpotifyAPI = () => {
    return $fetch("https://httpbin.org/get");
}