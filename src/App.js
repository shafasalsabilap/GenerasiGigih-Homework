import React from "react";
import Data from "./Data";
import _trackSong from "./components/tracks";
import './App.css';

export default function App() {
  
    return (
      <div className="container">
        
        <div className="playlist">
          <h1>Search Song</h1>
          <div class="form-playlist"> 
            <input type="text" id="playlist" name="playlist" /><br />
            <br />
            <button class="buttonPlaylist button2" type="button" onclick="alert('Your playlist has been saved!')">Search</button>
					</div>
        <hr></hr>
		    </div>

        
        {Data
        .map((d) => (
          <_trackSong
         image={d.album.images[0].url} album={d.name} artist={d.artists[0]?.name} title={d.album.name} key={d.album.name}/>
        ))}
      </div>
    );
 
}
