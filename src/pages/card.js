import { useState} from 'react';

const Cardsearch = ({url, album, title, artist, releasedate}) => {
    const [Select, setSelect] = useState(false);
    const [urlSelect, setUrl] = useState("");
    
    const handleSelect = () =>{
        if(!Select){
            setSelect(true);
            setUrl(url);
        }
        else{
            setSelect(false);
            setUrl("");
        }
    }


    return (
        <div className='container'>
            <div className='card-search'>
                <img src={url} alt=''></img>
                <h1>Album : {album}</h1>
                <h3 >Title : {title}</h3>
                <h2 >Artist : {artist}</h2>
                <h2 >Release Date : {releasedate}</h2>
                <button onClick={handleSelect}>
                    {
                        (!Select)? `Select` : `Deselect`
                    }
                </button>
            </div>
        </div>
    );
}

export default Cardsearch;