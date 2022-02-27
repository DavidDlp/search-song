import React from "react";
import { Route, Routes } from "react-router-dom";

//components
import SongSearch from "./../pages/SongSearch";
import SongDetails from "../pages/SongDetails";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Esto es el home </h1>
      </div>
      <Routes>
        <Route path="/song-search" element={<SongSearch />} />
        <Route path="/favorite-song" element={<SongDetails />} />
      </Routes>
    </div>
  );
};

export default Home;
