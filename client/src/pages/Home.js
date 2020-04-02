
import React, { Component } from 'react';
import NavbarMain from '../components/Navbar';
class Home extends Component {
  state = { 
      location:'',
   }
   
   handleChange =(e)=>{
    this.setState({
          location: e.target.value
    });  
   }
   
   handleSubmit = (e)=>{
      // e.preventDefault();
      console.log(this.state.location)
     
   }

  render() { 
    return (
      <>
        <NavbarMain />
        <form onSubmit={this.handleSubmit} >
            <div class="input-group mb-3">
              <input type="text" name="location" value={this.state.location} onChange={this.handleChange} class="form-control" placeholder="Enter City and State " aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
              </div>
            </div>
        </form>
      
    </>      
   );
  }
}
 
export default Home;



