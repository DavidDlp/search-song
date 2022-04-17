import React from "react";
import FavoriteTableRow from "../components/FavoriteTableRow";

const FavoriteSongs = ({ myFavoritesSongs }) => {
  // const handleDeleteSong = (id) => {
  //   let isDelete = window.confirm(
  //     "¿Estas seguro que deseas eliminarla?"
  //   );

  //   if(isDelete){
  //     let songs = myFavoritesSongs.filter((el, index) => index! == id);
  //     setMyFavoriteSongs(songs);
  //     localStorage.setItem("myFavoritesSongs", JSON.stringify(songs));
  //   }

  // };

  return (
    <div className="gnl-box">
      <h3>Mis canciones favoritas</h3>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Artista</th>
            <th>Canción </th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <FavoriteTableRow />
          {/* {myFavoritesSongs.length > 0 ? (
            myFavoritesSongs.map((item, index) => (
              <FavoriteTableRow key={index} el={item} id={index} handleDeleteSong={handleDeleteSong}/>
            ))
          ) : (
            <tr>
              <td colSpan="4">No tengo canciones favoritas</td>
            </tr>
          )} */}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteSongs;
