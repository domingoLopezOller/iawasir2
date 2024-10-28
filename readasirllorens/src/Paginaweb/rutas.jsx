export default function Rutas() {
    return (
    <Router>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/nombre" element={<MySkills/>} />
    <Route path="/about" element={<About/>} />
    </Routes>
    </Router>
    )}

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