const SongCard = ({imgSrc, title, artists,releasedate, album, Selected, handleSelect, uri }) => {
    return (
        <div className="card-search">
                <img src={imgSrc} alt="" />
                <h1>Album : {album}</h1>
                <h3>Title : {title}</h3>
                <h2> Artist : {artists.map(artist => artist.name).join(', ')}</h2>
                <h2> Release Date : {releasedate}</h2>
            <button onClick={() => handleSelect(uri)}> {Selected ? 'Deselect' : 'Select'} </button>
        </div>
    );
}

export default SongCard;