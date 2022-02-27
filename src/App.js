//Styles
import "./styles/app.scss";
//components
import Home from "./core/Home";
import NavBar from "./core/NavBar";
import Footer from "./core/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
