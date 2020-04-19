import React from 'react';
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';



function NavbarMain(){
  return(
    <>
         <Navbar className="navbar-bac text-white" expand="lg">
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
                <Nav.Link href="/">Home</Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
                
              </Nav>
            
            </Navbar.Collapse>
      </Navbar>

    </>
  );
}

export default NavbarMain;