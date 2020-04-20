
import React, { Component } from 'react';
import NavbarMain from '../components/Navbar';
import Example from '../components/Modal';


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
      

        <main role="main">


          <div className="jumbotron text-white">
              <h1 className="display-4 new-font">Real Estate </h1>
              {/* <p class="lead">Let us Guide you Home</p> */}
              <hr className="my-4"/>
              <p className="text-center jumbo-heading">Everyone Deserves the Opportunity of Home, So Move to What Moves You</p>
              <form onSubmit={this.handleSubmit}  className="search-bar">
                        <div className="input-group mb-3 col-xs-2">
                          <input id="search-bar" type="text" name="location" value={this.state.location} onChange={this.handleChange} className="form-control" placeholder="Enter Location " />
                        
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary  new-font" type="submit" id="button-addon2">Search</button>
                          </div>
                        </div>
                </form>
          </div>
              


  <div className="container marketing">

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading second-font"><span style={{color:'black'}}>First featurette heading.</span> <span className="text-muted">Move to What Moves You</span></h2>
        <p className="lead">Pride of ownership is the number one reason why people yearn to own their homes.  Beyond pride of ownership, it's important to realize another benefit. First, real estate moves in cycles, sometimes up, sometimes down, yet over the years, real estate has consistently appreciated.</p>
      </div>
      <div className="col-md-5">
      <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><image href="https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/condotownhouseinvestment.jpg" width="500px" height="500px"></image></svg>
      </div>
    </div>

    <hr className="featurette-divider"/>

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading second-font"><span style={{color:'black'}}>Oh yeah, it’s that good.</span> <span className="text-muted">See for yourself.</span></h2>
        <p className="lead">You might choose to buy a home if you want to put down roots. Renting, however, gives you the flexibility to discover and explore all types of neighborhoods if you’re unsure of where you’d like to be long-term.</p>
      </div>
      <div className="col-md-5 order-md-1">
        {/* <img src={pic1} width="500px" height="500px"></img> */}
        <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><image href="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=6&m=149060607&s=612x612&w=0&h=9CQCG-T1Oq2vgBjUEJbxny1OqJAbs6FpbhTQZK36Lxg=" width="500px" height="500px"></image></svg>
      </div>
    </div>

    <hr className="featurette-divider"/>

  </div>

</main>
   <div>
       <footer className="container">
    <p className="float-right" ><a href="#">Back to top</a></p>
    <p style={{fontSize:"smaller"}}>&copy; Travis Stewart &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
   </div>
        
    </>      
   );
  }
}
 
export default Home;



