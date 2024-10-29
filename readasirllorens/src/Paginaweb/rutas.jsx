import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Tarjeta from "./Cards";
import Nav from "./Nav";

export default function Rutas() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
	      <Route path="/nombre" element={<MySkills/>} />
        <Route path="/producto/:numero" element={<Producto/>} />
        <Route path="/about" element={<About/>} />
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
    return <Tarjeta/>
  }

function Producto() {
    //Lectura del parámetro de la URL
    const params = useParams();
    return <h2>PRODUCTO ELEGIDO: {params.numero}</h2>;
}