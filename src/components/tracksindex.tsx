import SongCard from "./trackscontainer";

export type SongProps =  {
  mergedTracks: mergedTracks[],
  handleSelect: (uri: string) => void,
}

export interface mergedTracks {
  album: Album
  artists: Artist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url?: string
  track_number: number
  type: string
  uri: string
  Selected: boolean
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


const Songs = ({ mergedTracks, handleSelect }: SongProps) => {
  return mergedTracks.map((track) => {
    const { uri } = track;
    return (
      <div className="">
        <SongCard
          uri={uri}
          imgSrc={track.album.images[1].url}
          title={track.name}
          artists={track.artists}
          album={track.album.name}
          releasedate={track.album.release_date}
          handleSelect={handleSelect} 
          Selected={track.Selected}       
        />
      </div>
    )
  });
}
// shafasalsabilapribadi kmg2fe4040
export default Songs;