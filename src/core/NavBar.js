import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const menuToggleHandler = () => {
    setShowLinks(!showLinks);
  };

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
        <Link to="/" onClick={menuToggleHandler}>
          Home
        </Link>
        <Link to="/song-search" onClick={menuToggleHandler}>
          Search
        </Link>
        <Link to="/favorite-song" onClick={menuToggleHandler}>
          Favorite
        </Link>
      </navbar>
    </div>
  );
};

export default NavBar;
