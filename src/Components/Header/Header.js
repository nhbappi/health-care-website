import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import Photo from '../../images/pet-icon.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Header = () => {

    // const {user, logOut} = useAuth();
    
    return (
    <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
      <img className="img-part" src={Photo} alt="" />
    <Navbar.Brand href="#home">Vetrexx</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
      <Nav.Link className="text-light" as={Link} to="/about">About</Nav.Link>
      <Nav.Link className="text-light" as={Link} to="/services">Services</Nav.Link>
      <Nav.Link className="text-light" as={Link} to="/vets">Vets</Nav.Link>
      <Nav.Link className="text-light" as={Link} to="/contact">Contact</Nav.Link>
      {/* {
          user.email &&  <span style={{color:'white'}}>{user.displayName ? user.displayName : user.email.substring(0, user.email.lastIndexOf("@"))}</span>
      }
      {
          user.email ?
          <button onClick={logOut}>Logout</button>

          :
        <Nav.Link className="text-light"  as={Link} to="/login">Login</Nav.Link>
      } */}
        </Navbar.Collapse>
    </Container>
  </Navbar>
    );
};

export default Header;