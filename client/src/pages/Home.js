
import React, { Component } from 'react';
import NavbarMain from '../components/Navbar';
import Example from '../components/Modal';
import modal from '../components/Modal';
import NewModal from '../components/Modal';
class Home extends Component {
  state = { 
      location:'',
      state: ''
   }
   
   handleChange =(e)=>{

    this.setState({
          [e.target.name]: e.target.value
    });  
   }

   
   
   handleSubmit = (e)=>{
      e.preventDefault();
      console.log(this.state.location)
      this.props.history.push({
        pathname: '/listing',
        search: '',
        state: { city: this.state.location, newState: this.state.state }
      })
   }

  render() { 
    return (
      <>
        <NavbarMain />
        <form onSubmit={this.handleSubmit} >
            <div class="input-group mb-3">
              <input type="text" name="location" value={this.state.location} onChange={this.handleChange} class="form-control" placeholder="Enter City and State " aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <select name="state" value={this.state.state} onChange={this.handleChange} class="form-control" >
                <option value="" disabled selected>Select your State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
              </div>
            </div>
        </form>

        <NewModal />
      
    </>      
   );
  }
}
 
export default Home;



