import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../data/hooks';
import queryString from 'query-string';
import Login from './Login';
import { setAccessToken } from "../data/redux/accessTokenSlice";

const Home = () => {
  // const [accessToken, setAccessToken] = useState()
  const accessToken = useAppSelector((state: any) => state.accessToken.value) // get access token from redux store
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(window.location.hash); // get access token from url
    dispatch(setAccessToken(parsed.access_token)); // set access token in redux store
  }, [accessToken, dispatch])

  useEffect(() => {
    accessToken !== undefined && ( // if access token is not undefined
      history.push("create-playlist") // redirect to create playlist page
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