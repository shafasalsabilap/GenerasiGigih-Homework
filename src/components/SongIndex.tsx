import SongContainer from './SongContainer';

export type SongProps =  {
  mergedSong: mergedSong[],
  handleSelect: (uri: string) => void,
}

export interface mergedSong {
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
  selected: boolean
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
  total_Songs: number
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


const Songs = ({mergedSong, handleSelect} : SongProps)  => {
  return mergedSong.map((track) => {
    const { uri } = track;
    return (
      <SongContainer
        key={track.id}
        uri={uri}
        imgSrc={track.album.images[1].url}
        title={track.name}
        artists={track.artists}
        releasedate={track.album.release_date}
        album={track.album.name}
        handleSelect={handleSelect}
        selected={track.selected}
      />
    )
  });
}

export default Songs;