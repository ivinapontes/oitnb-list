import React, { Component } from "react";
import Data from "./data/oitn.json";
import EpisodeInfo from "./EpisodeInfo";

const ShowInfo = () => {
  // console.log(Data);
  return (
    <div>
      {Data.map(function(e) {
        return <EpisodeInfo episode={e} />;
      })}
    </div>
  );
};

export default ShowInfo;
