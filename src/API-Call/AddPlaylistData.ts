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

export const AddPlaylistData = async (accessToken: string, userID: string, addPlaylistData: Params): Promise<ResponsePlaylist> => {
    const header = {
        Authorization: `Bearer ${accessToken}` // set access token in header
    }
    const bodyParams = {
        name: addPlaylistData.title,
        description: addPlaylistData.description,
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