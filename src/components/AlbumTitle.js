import React from "react";

const AlbumTitle = (props) => {
  return (
    <div>
      <h1>{props.type} : </h1>
      <h1>{props.name}</h1>
      <h2>
        {props.artist}
      </h2>
      <h3> release on : {props.release_date}</h3>
    </div>
  );
};

export default AlbumTitle;
