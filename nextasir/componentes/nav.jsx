import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { getDictionary } from "./diccionario";


function NavigationBar({ idioma, changeLanguage }) {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="p-4">
    <div className="container">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* Rutas principales */}
          <Nav.Link as={Link} href="/home" >
            Home
          </Nav.Link>
          <Nav.Link as={Link} href="/gen1">
            GEN 1
          </Nav.Link>
          <Nav.Link as={Link} href="/gen2">
            GEN 2
          </Nav.Link>
          <Nav.Link as={Link} href="/gen3">
            GEN 3
          </Nav.Link>
        </Nav>

        {/* Botones de idioma */}
       <div className="d-flex">
       <button onClick={() => changeLanguage('es')} className="p-2 rounded-full hover:bg-gray-200">
	          <Image src="/españa.png" alt="Español" width={30} height={28} />
        </button>
        <button onClick={() => changeLanguage('en')} className="p-2 rounded-full hover:bg-gray-200">
	          <Image src="/iglaterra.png" alt="Inglés" width={30} height={28} />
          </button>
          <button onClick={() => changeLanguage('fr')} className="p-2 rounded-full hover:bg-gray-200">
	          <Image src="/francia.png" alt="frances" width={30} height={28} />
          </button>
       </div>

      </Navbar.Collapse>
     
    </div>
  </Navbar>
  )
}
export default NavigationBar;
