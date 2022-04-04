import queryString from 'query-string';
import { useState, useEffect } from 'react';
import Login from './login';
import SearchPage from './searchpage';


const Home = () => {
  const [accessToken, setAccessToken] = useState();
  useEffect(() => {
    const parsed = queryString.parse(window.location.hash);
    setAccessToken(parsed.access_token);
  }, [accessToken])

  return (
    <div className="Home">
      <h1>Spotify Added Playlist</h1>
      {accessToken !== undefined ? (
        <>
          <SearchPage accessToken={accessToken}/>              
        </>
      )
        :
        (<Login />)}
    </div>
  )
}

export default Home;