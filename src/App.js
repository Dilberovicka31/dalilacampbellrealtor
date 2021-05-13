import Footer from "./components/Footer";
import GoogleMaps from "./components/Googlemaps";
import NavbarPage from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavbarPage/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
