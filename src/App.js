
import './App.css';
import {Component} from "react"

class App extends Component {
  state = {
    accessToken: window.location.hash
      .substring(1, window.location.hash.length - 1)
      .split("&")[0]
      .split("=")[1],
    search: "",
    track: [],
  };

  forLogin = () => {
    window.open(
      `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/`
    );
  };

  forChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  forSearch = () => {
    fetch(
      "https://api.spotify.com/v1/search?q=" +
        this.state.search +
        "&access_token=" +
        this.state.accessToken +
        "&type=track"
    )
      .then((track) => track.json())
      .then((track) => {
        console.log(track);
        this.setState({
          track: track.tracks.items,
        });
      });
  };

  render() {
    return (
    <body>
      <div className="container">
        {this.state.accessToken ? (
          <div className='card-one'>
            <h1>SEARCH SONG</h1>
            <input onChange={this.forChange} />
            <br></br>
            <button onClick={this.forSearch}>Cari</button>
            <div>{this.state.track.map((item) => item.name)}</div>
          </div>
        ) : (
          <div className='card-one'>
          <h1>SPOTIFY API LOGIN</h1>
          <button onClick={this.forLogin}>Login</button>
          </div>
        )}
      </div>
    </body>
    );
  }
}


export default App;