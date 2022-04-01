import {useEffect, useState } from "react";
import Login from "./login";
import Cardsearch from "./card";
import History from "./history";

const axios = require('axios').default;
const Home = () => {
    const [login, setLogin] = useState(false);
    const [judul, setjudul] = useState("");
    const [token, setToken] = useState([]);
    const [history, setHistory] = useState([]);
    const [tracks, setTracks] = useState([]);


    const handleInput = (e) => {
        setjudul(e.target.value);
    }
    const handleSubmit = async () => {
        try {
            const response = await axios.get("https://api.spotify.com/v1/search", {
                params: {
                    type: 'track',
                    limit: 10,
                    q: judul
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }

            })
            setHistory(tracks);
            setTracks(response.data.tracks.items);
        }
        catch (e) {
            alert("HARAP LOGIN TERLEBIH DAHULU")
            console.error(e)
        }

    }

    useEffect(() => {
        const url = localStorage.getItem("access_token");
        if (url !== null) {
            setToken(localStorage.getItem("access_token"));
            setLogin(true);
        }
        else {
            setLogin(false)
        }
    }, [])
    
    
    return (
        <>
            {(login) ? (
                <>
                    <div className="card-one"> 
                        <input type="text" onChange={handleInput} /><br/>
                        <button onClick={handleSubmit}>Search Song</button>
                        <hr></hr>
                        <h1>{judul}</h1>
                        <br />
                            {
                                tracks.map((item) => (
                                    <Cardsearch
                                        key={item.id}
                                        album={item.album.name}
                                        title={item.name}
                                        url={item.album.images[0].url}
                                        artist={item.artists[0].name}
                                        releasedate={item.album.release_date}
                                    />
                                ))
                            }
                        
                        <hr></hr>

                        <h1>HISTORY</h1>
                        {history.map((item) => (
                            <History
                                key={item.id}
                                imghistory={item.album.images[2].url}
                                albumhistory={item.album.name}
                                titlehistory={item.name}
                                artisthistory={item.artists[0].name}
                                releasedatehistory={item.album.release_date}
                            />
                            ))
                        } 
                    </div>
                </>
                )
                :
                <></>
            }
            <Login/>
        </>
    )
}

export default Home;