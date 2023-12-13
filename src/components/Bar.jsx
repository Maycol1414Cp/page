import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Bar() {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <a>
          <img className='logo' src={require('../assets/images/[removal.ai]_a848ee1a-5f5e-4bcd-a396-3a1383927db4-image1_0.png')}>
          </img>
        </a>
        <Navbar.Brand className='brand' href="/">FutbolerosClub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/gh-pages-test/info">Información del Equipo</Nav.Link>
            <Nav.Link href="/gh-pages-test/calendar">Calendario</Nav.Link>
            <Nav.Link href="/gh-pages-test/store">Tienda en Línea</Nav.Link>
            <Nav.Link href="/gh-pages-test/histories">Momentos Historicos</Nav.Link>
            <NavDropdown title="Academia Juvenil" id="basic-nav-dropdown">
              <NavDropdown.Item href="/gh-pages-test/InfoAcademy">Informacion</NavDropdown.Item>
              <NavDropdown.Item href="/gh-pages-test/Sponsor">Colaboraciones y Patrocinadores</NavDropdown.Item>
              <NavDropdown.Item href="/gh-pages-test/Admision">Proceso de Selección</NavDropdown.Item>
              <NavDropdown.Item href="/gh-pages-test/Schools">Colaboraciones con Escuelas Locales</NavDropdown.Item>
              <NavDropdown.Item href="/gh-pages-test/ApplyNow">Inscribirse</NavDropdown.Item>
              <NavDropdown.Item href="/gh-pages-test/Author">Autor de la web</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;