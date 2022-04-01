const History = ({imghistory, albumhistory, titlehistory, artisthistory,releasedatehistory})=>{

    return(
        <div className="container">
            <div className="card-history">
                <img src={imghistory} />
                <h1 >Album : {albumhistory}</h1>
                <h1 >Title : {titlehistory}</h1>
                <h2 >Artist : {artisthistory}</h2>
                <h2> Release Date : {releasedatehistory}</h2>
            </div>
        </div>
    )
}

export default History;