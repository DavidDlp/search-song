import React from "react";

//Components
import SongArtist from "../components/SongArtist";
import SongLyrics from "../components/SongLyrics";

const SongDetails = () => {
  return (
    <div>
      <SongArtist />
      <SongLyrics />
    </div>
  );
};

export default SongDetails;
