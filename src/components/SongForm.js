import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch, handleSaveSong }) => {
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos incompletos");
      setIsDisabled(true);
      return;
    }

    handleSearch(form);
    setForm(initialForm);
    setIsDisabled(false);
  };

  return (
    <div className="gnl-box__searchBox">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del artista"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Search" />
        <input
          type="button"
          onClick={handleSaveSong}
          value="Add Song"
          disabled={isDisabled && "disabled"}
        />
      </form>
    </div>
  );
};

export default SongForm;
