import axios from 'axios';
import { useEffect, useState } from 'react';
import Profile from './profile';
import Playlist from './playlist';
import SearchForm from '../components/search';
import Songs from '../components/tracksindex';

const SearchPage = ({ accessToken }) => {
    const [songData, setsongData] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedSong, setselectedSong] = useState([]);
    const [mergedTracks, setMergedTracks] = useState([]);

    useEffect(() => {
        const mergedTracksWithselectedSong
            = songData.map((track) => ({
                ...track,
                Selected: !!selectedSong.find((selectedTrack) => selectedTrack === track.uri),
            }));
        setMergedTracks(mergedTracksWithselectedSong);
    }, [selectedSong, songData]);

    const handleSelect = (uri) => {
        const alreadySelected = selectedSong.find(selectedTrack => selectedTrack === uri)
        if (alreadySelected) {
            setselectedSong(selectedSong.filter(selectedTrack => selectedTrack !== uri))
        }
        else {
            setselectedSong((selectedSong) => [...selectedSong, uri])
        }
        console.log(selectedSong)
    };

    const handleGetData = async (accessToken) => {
        const data = await axios
            .get(
                `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
            )
            .then((response) => response)
            .catch((error) => error)
        setsongData(data.data.tracks.items);
        console.log(data);
    }

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        handleGetData(accessToken)
    }

    const [user, setUser] = useState({
        displayName: '',
        imagesUrl: '',
        user_id: undefined
    })

    const fetchUserData = async () => {
        const data = await axios
            .get(
                `https://api.spotify.com/v1/me?access_token=${accessToken}`
            )
            .catch((error) => error)
        setUser({ ...user, displayName: data.data.display_name, imagesUrl: data.data.images[0].url, user_id: data.data.id })
        console.log(data);
    }

    const [addPlaylistData, setAddPlaylistData] = useState({
        title: '',
        description: '',
    })
    const [playlistID, setPlaylistID] = useState();
    const bodyParams = {
        name: addPlaylistData.title,
        description: addPlaylistData.description,
        collaborative: false,
        public: false
    }

    const header = {
        Authorization: `Bearer ${accessToken}`
    }

    const hanldeAddPlaylist = e => {
        const { name, value } = e.target;
        setAddPlaylistData({ ...addPlaylistData, [name]: value })
    }

    const handleAddSubmit = async e => {
        e.preventDefault();
        console.log(addPlaylistData);
        await axios
            .post(
                `https://api.spotify.com/v1/users/${user.user_id}/playlists`, bodyParams,
                {
                    headers: header
                }
            )
            .then((response) => (
                handlAddSongPlaylist(response.data.id)))
            .catch((error) => error)
    }
    
    const itemParams = {
        uris: selectedSong
    }

    const handlAddSongPlaylist = async (id) => {
        setPlaylistID(id);
        const data = await axios
            .post(
                `https://api.spotify.com/v1/playlists/${id}/tracks`, itemParams,
                {
                    headers: header
                }
            )
            .catch((error) => error)
        console.log(data);
    }
    const [masuk, setmasuk] = useState(false);
    const handlekeluar = ()=>{
        setmasuk(false);
        localStorage.clear()
        window.location = `http://localhost:3000/`;
    }

    return (
        <>
            <Profile
                fetchUserData={fetchUserData}
                user={user} />
            <hr></hr>
            <div>
            <button onClick={handlekeluar}>LogOut</button>
            </div>
            {user.user_id !== undefined && (
                <>
                    <Playlist
                        hanldeAddPlaylist={hanldeAddPlaylist}
                        handleAddSubmit={handleAddSubmit}
                        addPlaylistData={addPlaylistData}
                        playlistID={playlistID}
                        selectedSong={selectedSong} />
                    <SearchForm
                        onSubmit={handleSubmitSearch}
                        onChange={handleSearch} />
                </>
            )}
            <br />
            <div>
                {mergedTracks !== undefined && (
                    <Songs
                        mergedTracks={mergedTracks}
                        handleSelect={handleSelect} />
                )}
            </div>
        </>
    )
}

export default SearchPage;