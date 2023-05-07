import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/css/style.css';
import {Outline} from '../assets/content/Outline';
import {Link} from 'react-router-dom';

export default function TopNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="_navbar" variant="dark">
      <Container id="navContainer">
        <Navbar.Brand href="/">Easy DS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Topics"
              menuVariant="dark"
              
            >
              <div className="nav-dropdown-scroll">
              { 
                Outline.map(element => {
                    return (
                        <Link key={element.index} className='nav-link' to={`/tutorials/${element.link}`}>{element.topic}</Link>
                    )
                })
            }
            </div>
            </NavDropdown>
            <Link to="/tutorials/data-structure" className='nav-link'>Tutorials</Link>
          </Nav>
            <Link to="/feedback" className='nav-link feedback'>Feedback</Link>
            <Link to="/aboutus" className='nav-link aboutUs'>AboutUS</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}