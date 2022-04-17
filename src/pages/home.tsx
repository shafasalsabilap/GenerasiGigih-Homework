import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../Data/hooks';
import { useAppSelector } from '../Data/hooks';
import queryString from 'query-string';
import Login from './Login';
import { setAccessToken } from '../Data/redux/accessTokenSlice';

const Home = () => {
  const accessToken = useAppSelector((state: any) => state.accessToken.value)
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(window.location.hash); 
    dispatch(setAccessToken(parsed.access_token)); 
  }, [accessToken, dispatch])

  useEffect(() => {
    accessToken !== undefined && (
      history.push("create-playlist") 
    )
  }, [accessToken, history])

  return (
    <div className='card-login'>
      <h1>Spotify Create Playlist</h1>
      <Login />
    </div>
  )
}

export default Home;