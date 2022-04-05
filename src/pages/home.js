import queryString from 'query-string';
import { useState, useEffect } from 'react';
import Login from './login';
import SearchPage from './searchpage';
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken } from '../redux/tokenslice';

const Home = () => {
  const accessToken = useSelector((state) => state.accessToken.value)
  const dispatch = useDispatch();
  
  useEffect(() => {
    const parsed = queryString.parse(window.location.hash);
    setAccessToken(parsed.access_token);
  }, [accessToken, dispatch])

  return (
    <div className="Home">
      <h1>Spotify Added Playlist</h1>
      {accessToken !== undefined ? (
        <>
          <SearchPage/>              
        </>
      )
        :
        (<Login />)}
    </div>
  )
}

export default Home;