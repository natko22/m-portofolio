import "./App.css";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Clients from "./Pages/Clients";
import PublishedPhotos from "./Pages/Published";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/published" element={<PublishedPhotos />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
