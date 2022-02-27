import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
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
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default SongForm;
