import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../css/style.css';

export default function TopNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="_navbar" variant="dark">
      <Container id="navContainer">
        <Navbar.Brand href="#home">Easy DS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='nav-link'>Home</Nav.Link>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Topics"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/tutorials/data-structure" className='nav-link'>Tutorials</Nav.Link>
          </Nav>
            <Nav.Link href="/feedback" className='nav-link, feedback'>Feedback</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}