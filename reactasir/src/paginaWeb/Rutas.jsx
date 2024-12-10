import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Tarjeta from "./Cards";
import Nav from "./Nav";
import { PokemonGrid } from "./PokemonGrid";

export default function Rutas() {
  return (
    <Router>
      <Nav onResetPokemons={resetPokemons} />
      <Routes>
        <Route exact path="/" element={<Home/>} />
	      <Route path="/skills/:nombre" element={<MySkills/>} />
        <Route path="/producto/:numero" element={<Producto/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/about/domingo" element={<Domingo/>} />
        <Route path="/about/jazmin" element={<Jazmin/>} />
      </Routes>
    </Router>
  );
}


function Navbar() {
  // visible en cada página
  return <div>navbar</div>;
}
//Sólo se verá al principio con /
function Home() {
  return <div>home</div>;
}

//Sólo se verá con /about en la URL
function About() {
  return <div>about</div>;
}
function MySkills() {
    return <div>Avatars</div>
  }



function Producto() {
    //Lectura del parámetro de la URL
    const params = useParams();
    return <h2>PRODUCTO ELEGIDO: {params.numero}</h2>;
}

function Domingo() {
  return <h2>Domingo</h2>
}
