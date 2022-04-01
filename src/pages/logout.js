import {useState } from "react";
const Logout = () => {
    const [keluar, setkeluar] = useState(false);
    
    const handlekeluar = ()=>{
        setkeluar(false);
        localStorage.clear()
        window.location = `http://localhost:3000/`;
    }

    return(
        <>
        {(!keluar)?
            <button className="card-one" onClick={handlekeluar}>LogIn</button>
            :
            <></>
        }
        </>
    );

}

export default Logout;