import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "./Logo.svg";

function Topnav() {
    return (
      <>
      <nav className='fixed-top'>
      <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Little Lemon logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
          <Nav className="justify-content-end">
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Reservations</Nav.Link>
          <Nav.Link>Specials</Nav.Link>
          <Nav.Link>Order Online</Nav.Link>
          </Nav>
          </Container>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        </nav>
      </>
    );
  }

  export default Topnav;