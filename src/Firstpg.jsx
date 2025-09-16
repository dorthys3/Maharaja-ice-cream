import logo1 from './assets/logo1.png'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{Link}from"react-router-dom";
const Firstpg = () => {
  return (
    <div>
        <Navbar expand="lg" className="Nav" style={{backgroundColor:'#c02080'}}>
        <Container>
             <Navbar.Brand as={Link} to="/">
            <img src={logo1}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{color:'white',fontWeight:'bold'}}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{color:'white',fontWeight:'bold'}}>About</Nav.Link>
            <Nav.Link as={Link} to="/icecream" style={{color:'white',fontWeight:'bold'}}>Icecream</Nav.Link>
            <Nav.Link as={Link} to="/gallary" style={{color:'white',fontWeight:'bold'}}>Gallary</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{color:'white',fontWeight:'bold'}}>Contact</Nav.Link>
          </Nav>
         </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  )
}

export default Firstpg


