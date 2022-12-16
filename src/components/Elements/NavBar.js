import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Offcanvas } from 'react-bootstrap';

import Logo from '../../img/logo.png'
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
    <>
      <Navbar key={"nav"} bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/"> <img src={Logo} alt="logo" className='logo-img' /></Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                <h2 style={{ color: "#E54F6D", paddingLeft: 20, paddingTop:20 }}>Browse Genres</h2>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" style={{ paddingLeft: 20 }}>
                <Nav.Link href="/adventure">Adventure</Nav.Link>
                <Nav.Link href="/dystopian">Dystopian</Nav.Link>
                <Nav.Link href="/fiction">Fiction</Nav.Link>
                <Nav.Link href="/historical">Historical</Nav.Link>
                <Nav.Link href="/horror">Horror</Nav.Link>
                <Nav.Link href="/science-fiction">Science Fiction</Nav.Link>

                <hr></hr>
                <Nav.Link href='/register'>Register</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
