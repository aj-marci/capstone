import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from "./Images/Logo.svg";

const handleClick = (anchor) => () => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

function Topnav() {
    return (
      <>
      <nav>
      <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="100%"
              height="100%"
              className="d-inline-block align-top"
              alt="Little Lemon logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className='nav-items'>
            <Nav className="justify-content-end">
              <Nav.Link onClick={handleClick("about")} href={"/#about"}>About</Nav.Link>
              <Nav.Link href="#reserve">Reservations</Nav.Link>
              <Nav.Link onClick={handleClick("review")} href={"/#review"}>Reviews</Nav.Link>
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