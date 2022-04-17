import React from "react";

const FavoriteTableRow = ({ id, el, handleDeleteSong }) => {
  //let {bio, search} = el;
  //let avatar = bio.artist[0]strArtistTrumb;
  let avatarStyles = {
    width: "auto",
    height: "40px",
  };
  console.log(el);

  return (
    <>
      <tr>
        <td>
          <img
            style={avatarStyles}
            src="http://placeimg.com/40/40/people"
            alt="nombre artista"
          />
        </td>
        <td>nombre del artista</td>
        <td>Nombre de la canción</td>
        <td>
          <button>Ver</button>
          {/* onClick buscar la nueva forma de router v6 para sacar la info */}
          <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default FavoriteTableRow;
