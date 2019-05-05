import React from "react";

const EpisodeInfo = props => {
 // console.log(props);
  return (
    <div>
      <p>{props.episode.name}</p>

      <img src={props.episode.image.medium} />
      <p>{props.episode.summary}</p>
    </div>
  );
};

export default EpisodeInfo;
