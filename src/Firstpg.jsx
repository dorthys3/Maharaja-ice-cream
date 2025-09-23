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
            <Nav.Link href="#homepg" style={{color:'white',fontWeight:'bold'}}>Home</Nav.Link>
              <Nav.Link href="#aboutpg" style={{color:'white',fontWeight:'bold'}}>About</Nav.Link>
              <Nav.Link href="#icecreampg" style={{color:'white',fontWeight:'bold'}}>Icecream</Nav.Link>
              <Nav.Link href="#gallarypg" style={{color:'white',fontWeight:'bold'}}>Gallery</Nav.Link>
              <Nav.Link href="#contactpg" style={{color:'white',fontWeight:'bold'}}>Contact</Nav.Link>
          </Nav>
         </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </div>
  )
}

export default Firstpg


