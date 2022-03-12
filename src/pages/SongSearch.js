import React from "react";

//Components
import SongForm from "../components/SongForm";
import SongDetails from "./SongDetails";

const SongSearch = () => {
  return (
    <div className="gnl-box">
      <h3>Song Search</h3>
      <SongForm />
      <SongDetails />
    </div>
  );
};

export default SongSearch;
