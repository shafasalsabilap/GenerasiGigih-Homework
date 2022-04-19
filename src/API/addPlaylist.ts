import axios from "axios"

export type Params = {
    title: string,
    description: string,
}

export type ResponsePlaylist = {
    id: string,
    name: string,
    description: string,
    public: boolean,
    collaborative: boolean,
    uri: string,
    href: string,
    external_urls: {
        spotify: string,
    },
    followers: {
        href: string,
        total: number,
    },
    images: [
        {
            height: number,
            width: number,
            url: string,
        },
    ],
    owner: {
        display_name: string,
        external_urls: {
            spotify: string,
        },
        href: string,
        id: string,
        type: string,
        uri: string,
    },
    tracks: {
        href: string,
        total: number,
    },
}

export const addPlaylistAPI = async (accessToken: string, userID: string, playlistData: Params): Promise<ResponsePlaylist> => {
    const header = {
        Authorization: `Bearer ${accessToken}` // set access token in header
    }
    const bodyParams = { // body params for add playlist
        name: playlistData.title,
        description: playlistData.description,
        collaborative: false,
        public: false
    }
    const data = await axios //create playlist
        .post(
            `https://api.spotify.com/v1/users/${userID}/playlists`, bodyParams,
            {
                headers: header
            }
        )
        .catch((error) => error)
    return data.data;
}