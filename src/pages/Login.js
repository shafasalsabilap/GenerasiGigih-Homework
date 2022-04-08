const Login = () => {
    const clientID = process.env.REACT_APP_CLIENT_ID;
    const redirectURI = 'http://localhost:3000/';
    const scope = 'playlist-modify-private';
    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirectURI);

    return (
        <>
            <a href={url}><button className="selectButton">Login</button></a>
        </>
    )
}

export default Login;