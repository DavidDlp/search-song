import React from "react";
import FavoriteTableRow from "../components/FavoriteTableRow";

const FavoriteSongs = () => {
  return (
    <div className="gnl-box">
      <h3>Mis canciones favoritas</h3>
      <table>
        <thead>
          <tr>
            <th>Artista</th>
            <th>Letra de la canción </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <FavoriteTableRow />
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteSongs;
