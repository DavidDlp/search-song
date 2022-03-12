//Styles
import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";

//components
import NavBar from "./core/NavBar";
import Footer from "./core/Footer";

//Routes
import Home from "./pages/Home";
import SongSearch from "./pages/SongSearch";
import FavoriteSong from "./pages/FavoriteSong";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song-search" element={<SongSearch />} />
        <Route path="/favorite-song" element={<FavoriteSong />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
