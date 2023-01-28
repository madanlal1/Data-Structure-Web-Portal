import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/css/style.css';
import {Outline} from '../assets/content/Outline';

export default function TopNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="_navbar" variant="dark">
      <Container id="navContainer">
        <Navbar.Brand href="/">Easy DS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className='nav-link'>Home</Nav.Link>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Topics"
              menuVariant="dark"
              
            >
              <div className="nav-dropdown-scroll">
              { 
                Outline.map(element => {
                    return (
                        <NavDropdown.Item id='_nav' href={`/tutorials/${element.link}`}>{element.topic}</NavDropdown.Item>
                    )
                })
            }
            </div>
            </NavDropdown>
            <Nav.Link href="/tutorials/data-structure" className='nav-link'>Tutorials</Nav.Link>
          </Nav>
            <Nav.Link href="/feedback" className='nav-link, feedback'>Feedback</Nav.Link>
            <Nav.Link href="/aboutus" className='nav-link, aboutUs'>AboutUS</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}