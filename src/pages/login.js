import { useEffect, useState } from "react";
const Login = () => {
    const [_token, setToken] = useState("");
    const [masuk, setmasuk] = useState(false);

    const handlemasuk = ()=>{
        window.location = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=http://localhost:3000/`;
    }
    const handlekeluar = ()=>{
        setmasuk(false);
        localStorage.clear()
        window.location = `http://localhost:3000/`;
    }


    useEffect(()=> {
            let url = window.location.hash;
            if(url.length > 0 ){
                url = url.substring(1).split("&")[0].split("=")[1];
                setToken(url);
                setmasuk(true);
                localStorage.setItem("access_token", url);
            }
        }, []
    )
    

    return(
        <>
        {(!masuk)?
            <div className="card-login">
                <h1>SPOTIFY API LOGIN</h1>
            <button onClick={handlemasuk}>LogIn</button>
            </div>
            :
            <div>
            <button onClick={handlekeluar}>LogOut</button>
            </div>
        }
        </>
    );

}

export default Login;