import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="container-header">
      <div className="container-header__title">
        <h1 className="container-header__title--logo">
          Search<span className="container-header__title--text">Song</span>
        </h1>
      </div>
      <button
        className="container-header__toggle"
        onClick={() => setShowLinks(!showLinks)}
      >
        <GiHamburgerMenu />
      </button>
      <navbar
        className="container-header__navbar "
        id={showLinks ? "hidden" : ""}
      >
        <Link to="/">Home</Link>
        <Link to="/song-search">Search</Link>
        <Link to="/favorite-song">Favorite</Link>
      </navbar>
    </div>
  );
};

export default NavBar;
