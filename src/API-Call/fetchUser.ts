import axios from "axios"

export type ResponseUser = {
    display_name: string
    followers: Followers
    href: string
    id: string
    images: Image[]
    type: string
    uri: string
}

export interface Followers {
    href: any
    total: number
}

export interface Image {
    height: any
    url: string
    width: any
}

export const fetchUser = async (accessToken: string): Promise<ResponseUser> => {
    const data = await axios // get user data
        .get(
            `https://api.spotify.com/v1/me?access_token=${accessToken}`
        )
        .catch((error) => error)
    return data.data;
}