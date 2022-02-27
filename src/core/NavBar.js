import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h1>Esto es el logo</h1>
      <Link to="/">Home</Link>
      <Link to="/song-search">Search</Link>
      <Link to="/favorite-song">Favorite</Link>
    </div>
  );
};

export default NavBar;
