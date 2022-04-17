import axios from "axios"

export type ResponseTracks = Root[]

export interface Root {
  album: Album
  artists: Artist2[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string
  track_number: number
  type: string
  uri: string
}

export interface Album {
  album_type: string
  artists: Artist[]
  available_markets: string[]
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface Artist {
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface Artist2 {
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export const fetchSong = async (query: string, accessToken: string): Promise<ResponseTracks> => {
    const data = await axios //get tracks data
        .get(
            `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
        )
        .catch((error) => error)
    console.log(data.data.tracks.items);
    return data.data.tracks.items;
}