import axios from "axios";

export type ItemParams = {
    uris: string[]
}

export interface ResponseaddSongAPI {
    data: Data
    status: number
    statusText: string
    headers: Headers
    config: Config
    request: Request
}

export interface Data {
    snapshot_id: string
}

export interface Headers {
    "cache-control": string
    "content-length": string
    "content-type": string
}

export interface Config {
    transitional: Transitional
    transformRequest: any[]
    transformResponse: any[]
    timeout: number
    xsrfCookieName: string
    xsrfHeaderName: string
    maxContentLength: number
    maxBodyLength: number
    headers: Headers2
    method: string
    url: string
    data: string
}

export interface Transitional {
    silentJSONParsing: boolean
    forcedJSONParsing: boolean
    clarifyTimeoutError: boolean
}

export interface Headers2 {
    Accept: string
    "Content-Type": string
    Authorization: string
}

export interface Request { }



export const addSongAPI = async (accessToken: string, playlist_id: string, itemParams: ItemParams): Promise<ResponseaddSongAPI> => {
    const header = {
        Authorization: `Bearer ${accessToken}` // set access token in header
    }

    const data = await axios //add items to playlist
        .post(
            `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, itemParams,
            {
                headers: header
            }
        )
        .catch((error) => error);
    return data;
}