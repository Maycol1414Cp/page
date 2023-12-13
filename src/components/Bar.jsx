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
        <Navbar.Brand className='brand' href="/gh-pages-test/">FutbolerosClub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./info">Información del Equipo</Nav.Link>
            <Nav.Link href="./calendar">Calendario</Nav.Link>
            <Nav.Link href="./store">Tienda en Línea</Nav.Link>
            <Nav.Link href="./histories">Momentos Historicos</Nav.Link>
            <NavDropdown title="Academia Juvenil" id="basic-nav-dropdown">
              <NavDropdown.Item href="./InfoAcademy">Informacion</NavDropdown.Item>
              <NavDropdown.Item href="./Sponsor">Colaboraciones y Patrocinadores</NavDropdown.Item>
              <NavDropdown.Item href="./Admision">Proceso de Selección</NavDropdown.Item>
              <NavDropdown.Item href="./Schools">Colaboraciones con Escuelas Locales</NavDropdown.Item>
              <NavDropdown.Item href="./ApplyNow">Inscribirse</NavDropdown.Item>
              <NavDropdown.Item href="./Author">Autor de la web</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar;