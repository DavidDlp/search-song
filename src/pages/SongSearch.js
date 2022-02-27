import React from "react";

//Components
import SongForm from "../components/SongForm";
import SongDetails from "./SongDetails";

const SongSearch = () => {
  return (
    <div>
      <h1>Song Search</h1>
      <SongForm />
      <SongDetails />
    </div>
  );
};

export default SongSearch;
