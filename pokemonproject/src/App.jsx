import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import NavBar from './components/Navbar.jsx';
import Gen1 from "./components/Gen1.jsx";
import Gen2 from "./components/Gen2.jsx";
import Gen3 from "./components/Gen3.jsx";
import Main from './components/Main.jsx';

function App() {
  return (
    <Router>  {/* Agregamos el Router aquí */}
      <Header />
      <NavBar />
      <Routes>
        <Route path="/gen1" element={<Gen1 />} />
        <Route path="/gen2" element={<Gen2 />} />
        <Route path="/gen3" element={<Gen3 />} />
        {/* Agrega tu ruta principal si es necesario */}
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Router>  /* El Router debe envolver todo */
  );
}

export default App;
