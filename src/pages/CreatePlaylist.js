import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Playlist from '../components/Playlist';
import Songs from '../components/tracksindex';
import SearchForm from '../components/Search';
import Profile from './Profile';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import { fetchSong } from '../API-Call/fetchSong';
import { AddPlaylistData } from '../API-Call/AddPlaylistData';
import { AddSongData } from '../API-Call/AddSongData';

const CreatePlaylist = () => {
    const [songData, setSongData] = useState([]);
    const [query, setQuery] = useState(""); 
    const [selectedSong, setselectedSong] = useState([]); 
    const [mergedTracks, setMergedTracks] = useState([]); 
    const accessToken = useSelector((state) => state.accessToken.value);
    const userID = useSelector((state) => state.user.value.userID);

    useEffect(() => {
        const mergedTracksWithselectedSong
            = songData.map((track) => ({
                ...track,
                Selected: !!selectedSong.find((selecetedSong) => selecetedSong === track.uri),
            }));
        setMergedTracks(mergedTracksWithselectedSong); 
    }, [selectedSong, songData]);

    
    const handleSelect = (uri) => {
        const alreadySelected = selectedSong.find(selecetedSong => selecetedSong === uri) 
        if (alreadySelected) {
            setselectedSong(selectedSong.filter(selecetedSong => selecetedSong !== uri)) 
        }
        else {
            setselectedSong((selectedSong) => [...selectedSong, uri]) 
        }
        console.log(selectedSong)
    };

    const handleGetData = async () => {
        const data = await fetchSong(query, accessToken );
        setSongData(data.data.tracks.items);
        console.log(data);
    }

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault(); 
        handleGetData();
    }

    const [addPlaylistData, setAddPlaylistData] = useState({
        title: '',
        description: '',
    })
    const hanldeAddPlaylist = e => {
        const { name, value } = e.target;
        setAddPlaylistData({ ...addPlaylistData, [name]: value }) 
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        const data = await AddPlaylistData(accessToken, userID, addPlaylistData);
        console.log("Playlist created: ", data);
        selectedSong.length > 0 && (handlAddSongPlaylist(data.id));
    }
    
    const itemParams = {
        uris: selectedSong 
    }

    const handlAddSongPlaylist = async (playlist_id) => {
        const data = await AddSongData(accessToken, playlist_id, itemParams);
        console.log("Items added to playlist: ", data);
    }
    const setmasuk = useState(false);
    const handlekeluar = ()=>{
        setmasuk(false);
        localStorage.clear()
        window.location = `http://localhost:3000/`;
    }

    return (
        <>
            <h1> Spotify Create Playlist</h1>
            <div className='form-profile'>
                <Profile/>
                <Button  onClick={handlekeluar} size="large" variant="contained" color="success" startIcon={<LogoutIcon />}> LOGOUT </Button> {/* ADD NEW UI BUTTON FROM MUI */}
                {/* <button onClick={handlekeluar}>LogOut</button> */}
                <br/><br/>
            </div>

            <Playlist
                hanldeAddPlaylist={hanldeAddPlaylist}
                handleAddSubmit={handleAddSubmit}
                addPlaylistData={addPlaylistData} />

            <div className="form-search">
                <SearchForm
                    onSubmit={handleSubmitSearch}
                    onChange={handleSearch} />
                <br />
                <div className='song-container'> 
                    {mergedTracks !== undefined && ( 
                        <Songs 
                            mergedTracks={mergedTracks} 
                            handleSelect={handleSelect} key={mergedTracks.uri} />
                    )}
                </div>
            </div>
        </>
    )
}

export default CreatePlaylist;