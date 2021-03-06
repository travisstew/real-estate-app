import React from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';



function NavbarMain(){
  return(
    <>
         <Navbar className="navbar-bac sticky-top text-white" expand="lg">
            <Navbar.Brand href="/" id="home" className="new-font">
            <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Real Estate</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
                
                
              </Nav>
            
            </Navbar.Collapse>
      </Navbar>

    </>
  );
}

export default NavbarMain;