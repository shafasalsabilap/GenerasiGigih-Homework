import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SearchForm from '../components/Search';
import Songs from '../components/SongIndex';
import Playlist from '../components/Playlist';
import Profile from './Profile';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { fetchUserAPI } from '../API/fetchUser';
import { addPlaylistAPI } from '../API/addPlaylist';
import { addSongAPI } from '../API/addSong';

const CreatePlaylist = () => {
    const [songData, setSongData] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedSong, setSelectedSong] = useState([]); 
    const [mergedSong, setMergedSong] = useState([]);
    const accessToken = useSelector((state) => state.accessToken.value);
    const userID = useSelector((state) => state.user.userID);

    useEffect(() => {
        const mergedSongWithselectedSong 
            = songData.map((track) => ({
                ...track,
                selected: !!selectedSong.find((selectedSong) => selectedSong === track.uri), 
            }));
        setMergedSong(mergedSongWithselectedSong); 
    }, [selectedSong, songData]);

    const handleSelect = (uri) => {
        const alreadySelected = selectedSong.find(selectedSong => selectedSong === uri) 
        if (alreadySelected) {
            setSelectedSong(selectedSong.filter(selectedSong => selectedSong !== uri)); 
        }
        else {
            setSelectedSong((selectedSong) => [...selectedSong, uri]); 
        }
        console.log(selectedSong);
    };

    const handleGetSong = async () => {
        const data = await fetchUserAPI(query, accessToken );
        setSongData(data); 
        console.log(data);
    }

    const handleSearch = (e) => {
        setQuery(e.target.value); 
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        handleGetSong();
    }

    const [playlistData, setPlaylistData] = useState({
        title: '',
        description: '',
    })

    const handlePlaylist = e => {
        const { name, value } = e.target;
        setPlaylistData({ ...playlistData, [name]: value }); 
    }

    const handlePlaylistSubmit = async (e) => {
        e.preventDefault();
        const data = await addPlaylistAPI(accessToken, userID, playlistData);
        console.log("Playlist created: ", data);
        selectedSong.length > 0 && (handleAddSong(data.id));
    }

    //add Item to Playlist Things
    const itemParams = { // item params for add item to playlist
        uris: selectedSong
    }

    const handleAddSong = async (playlist_id) => {
        const data = await addSongAPI(accessToken, playlist_id, itemParams);
        console.log("Items added to playlist: ", data);
    }

    const keluar = useState(false);
    const handleLogout = ()=>{
        keluar(false);
        localStorage.clear()
        window.location = `http://localhost:3000/`;
    }

    return (
        <>
            <h1> Spotify Create Playlist</h1>
            <div className='form-profile'>
                <Profile />
                <Button  onClick={handleLogout} size="large" variant="contained" color="success" startIcon={<LogoutIcon />}> LOGOUT </Button> {/* ADD NEW UI BUTTON FROM MUI */}
                {/* <button onClick={handlekeluar}>LogOut</button> */}
                <br/><br/>
            </div>

            <Playlist
                handlePlaylist={handlePlaylist}
                handlePlaylistSubmit={handlePlaylistSubmit}
                addPlaylistAPI={addPlaylistAPI} />
            
            <div className="form-search">
                <SearchForm
                    onSubmit={handleSearchSubmit}
                    onChange={handleSearch} />
                <br />
                <div className="grid-container">
                    {mergedSong !== undefined && ( // if merged tracks exist
                        <Songs // render tracks
                            mergedSong={mergedSong}
                            handleSelect={handleSelect} key={mergedSong.uri} />
                    )}
                </div>
            </div>
        </>
    )
}

export default CreatePlaylist;