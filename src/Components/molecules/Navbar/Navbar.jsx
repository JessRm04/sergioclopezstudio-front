import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import miniLogo from '../../../assets/design/miniLogo.png'
import './styleNavbar.css'

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
                  <img src={miniLogo} alt="logo" width="12%"></img>
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
                  <Nav.Link href="#action1">Añadir producto</Nav.Link>
                  <Nav.Link href="#action1">Añadir colección</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="logoContainer">
            <Navbar.Brand href="#"><img src={miniLogo} alt="logo" width="22%" className="logo"></img></Navbar.Brand>
            </div>
            <span>
            <Nav.Link href="#action1">Log in</Nav.Link>
            </span>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;