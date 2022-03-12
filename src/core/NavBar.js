import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container-header">
      <div className="container-header__title">
        <h1 className="container-header__title--logo">
          Search<span className="container-header__title--text">Song</span>
        </h1>
      </div>
      <navbar>
        <Link to="/">Home</Link>
        <Link to="/song-search">Search</Link>
        <Link to="/favorite-song">Favorite</Link>
      </navbar>
    </div>
  );
};

export default NavBar;
