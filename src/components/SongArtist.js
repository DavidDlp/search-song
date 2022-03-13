import React from "react";

const SongArtist = ({ artist }) => {
  return (
    <section className="box__detailsBox--artistBox">
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>
        {artist.strGenre} - {artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        Oficial Website
      </a>
      <p>{artist.strBiographyEN}</p>
    </section>
  );
};

export default SongArtist;
