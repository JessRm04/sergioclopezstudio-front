import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import miniLogo from '../../../assets/design/miniLogo.png'
import './styleNavbar.css'
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand="md" className="mb-3">
          <Container className="container">
            <Navbar.Toggle className="toggle" aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`
              }
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Nav.Link href="/"><img src={miniLogo} alt="logo" width="12%"></img></Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <NavDropdown
                    title="Colección"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action3">Shake</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Lacrimatorio</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="createProduct">Añadir producto</Nav.Link>
                  <Nav.Link href="#action1">Añadir colección</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="logoContainer">
            <Nav.Link href="/"><img src={miniLogo} alt="logo" width="18%"></img></Nav.Link>
            </div>
            <span>
            <button className="contactButton" href="">Contacto</button>
            <Nav.Link className="loginButton"  href="login">Log in</Nav.Link>
            </span>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;