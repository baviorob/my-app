import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinasi from "./pages/Destinasi";
import Budaya from "./pages/Budaya";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/budaya" element={<Budaya />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
