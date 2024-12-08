import Link from "next/link";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navigation(){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Pokemon</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Generations" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} href="/gen1">Gen1</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/gen2">Gen2</NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/gen3">Gen3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;