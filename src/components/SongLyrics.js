import React from "react";

const SongLyrics = ({ title, lyrics }) => {
  return (
    <section className="box__detailsBox--lyricsBox">
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyrics}</blockquote>
    </section>
  );
};

export default SongLyrics;
