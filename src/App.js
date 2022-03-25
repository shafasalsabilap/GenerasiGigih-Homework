import logo from './logo.svg';
import './App.css';
import Album from './components/Index';
import spotify from "./spotify.json"

function App() {
  return (
    <div className="App">
        <div className="description-artist">
			    <h1> Top Global Songs </h1>
		    	<div class="baris-1">
				    <div class="card-one">
						<Album
            image={spotify.album.images[0].url}
            name={spotify.album.name}
            type={spotify.album.type}
            artist={spotify.album.artists[0].name}
            release_date={spotify.album.release_date}
          />
        </div>
        </div>
        </div>
    </div>
  );
}

export default App;
