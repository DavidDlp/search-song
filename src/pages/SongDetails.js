import React from "react";

//Components
import SongArtist from "../components/SongArtist";
import SongLyrics from "../components/SongLyrics";

//Utils
import Message from "./../servicies/Message";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      <div className="gnl-box__detailsBox">
        {bio.artists ? (
          <SongArtist artist={bio.artists[0]} />
        ) : (
          <Message
            msg={`There is not interpreter ${search.artist}`}
            bgColor="#dc3545"
          />
        )}
      </div>
      <div>
        {lyric.error || lyric.err || lyric.name === "AbortError" ? (
          <Message
            msg={`The song does not exist ${search.song}`}
            bgColor="#dc3545"
          />
        ) : (
          <SongLyrics title={search.song} lyrics={lyric.lyrics} />
        )}
      </div>
    </>
  );
};

export default SongDetails;
