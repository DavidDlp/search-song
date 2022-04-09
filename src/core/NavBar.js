import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container-header">
      <div className="container-header__title">
        <h1 className="container-header__title--logo">
          Search<span className="container-header__title--text">Song</span>
        </h1>
      </div>
      <navbar className="container-header__navbar">
        <button className="container-header__navbar--toggle">
          <GiHamburgerMenu />
        </button>
        <Link to="/">Home</Link>
        <Link to="/song-search">Search</Link>
        <Link to="/favorite-song">Favorite</Link>
      </navbar>
    </div>
  );
};

export default NavBar;
