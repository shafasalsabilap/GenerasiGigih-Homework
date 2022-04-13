import * as React from 'react';
import Button from '@mui/material/Button';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const Playlist = ({ hanldeAddPlaylist, handleAddSubmit, addPlaylistData }) => {
    return (
        <div className="form-playlist">
            <h2>Create Playlist</h2>
            <form onSubmit={handleAddSubmit}>
                <label>Name</label><br />
                <input id="title" type="text" value={addPlaylistData.title} onChange={hanldeAddPlaylist} name="title" />
                <br />
                <br></br>
                <label> Description </label><br />
                <textarea id="description" type="text" value={addPlaylistData.description} onChange={hanldeAddPlaylist} name="description" />
                <br/>
                <br/>
                <Button type="submit" value="Submit" variant="contained" color="success" startIcon={<SaveAltIcon />}> SAVE </Button> {/* ADD NEW UI BUTTON FROM MUI */}
                {/* <button className="selectButton" type="submit" value="Submit" onclick="alert('Your playlist has been saved!')">Save</button> OLD BUTTON*/}
            </form>
        </div>
    )
}

export default Playlist;