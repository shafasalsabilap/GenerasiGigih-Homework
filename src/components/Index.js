import React from "react";
import AlbumImage from "./AlbumImage";
import AlbumTitle from "./AlbumTitle";
import PlayButton from "./PlayButton";

const Album = (props) => {
  /* don't forget to put the props parameter in order to use props */
  return (
    <div>
      <AlbumImage image={props.image} />
      <hr></hr>
      <AlbumTitle name={props.name} type={props.type} artist={props.artist} release_date={props.release_date} />
      <PlayButton />
    </div>
  );
};

export default Album;
