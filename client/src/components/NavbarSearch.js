import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logo.png';
import { withRouter} from 'react-router-dom';


class NavbarSearch extends Component {
  state = { 
    location:'',
    state:'',
   }

   handleChange =(e)=>{
    this.setState({
          [e.target.name]: e.target.value
    });  
   }

   handleSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state.location);
    this.props.history.push({
      pathname: '/listing',
      search: '',
      state: { city: this.state.location, newState: this.state.state }
    });
    window.location.reload();
  }
   

  render() { 
      return ( 
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
                  <form onSubmit={this.handleSubmit} class="form-inline">
                    <input  type="text" name="location" value={this.state.location} onChange={this.handleChange} class="form-control" placeholder="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                {/* <Nav.Link href="#link">Link</Nav.Link> */}
             
              </Nav>
            
             </Navbar.Collapse>
          </Navbar>
          </> 
          
      );
  }
}
 
export default withRouter( NavbarSearch);