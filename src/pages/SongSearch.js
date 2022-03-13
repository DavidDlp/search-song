import React, { useState, useEffect } from "react";

//Components
import SongForm from "./../components/SongForm";
import SongDetails from "./SongDetails";

//Utils
import { helpHttp } from "./../servicies/helpHttp";
import Loader from "./../servicies/Loader";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const searchData = async () => {
      const { artist, song } = search;

      let artistDb = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songDb = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      console.log(artistDb, songDb);
      setLoading(true);

      const [artistData, songData] = await Promise.all([
        helpHttp().get(artistDb),
        helpHttp().get(songDb),
      ]);

      console.log(artistData, songData);
      setBio(artistData);
      setLyric(songData);
      setLoading(false);
    };

    searchData();
  }, [search]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  return (
    <div className="gnl-box">
      <SongForm handleSearch={handleSearch} />
      {loading && <Loader />}
      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
    </div>
  );
};

export default SongSearch;
