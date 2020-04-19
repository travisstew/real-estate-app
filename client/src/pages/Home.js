
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


          <div class="jumbotron text-white">
              <h1 class="display-4 new-font">Real Estate </h1>
              <p class="lead">Let us Guide you Home</p>
              <hr class="my-4"/>
              <p>Everyone Deserves the Opportunity of Home, So Move to What Moves You</p>
              <form onSubmit={this.handleSubmit}  className="search-bar">
                        <div class="input-group mb-3 col-xs-2">
                          <input id="search-bar" type="text" name="location" value={this.state.location} onChange={this.handleChange} class="form-control" placeholder="Enter Location " />
                        
                          <div class="input-group-append">
                            <button class="btn btn-outline-secondary  new-font" type="submit" id="button-addon2">Search</button>
                          </div>
                        </div>
                </form>
          </div>
              


  <div class="container marketing">

    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading second-font">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
      <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><image href="https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/condotownhouseinvestment.jpg" width="500px" height="500px"></image></svg>
      </div>
    </div>

    <hr class="featurette-divider"/>

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading second-font">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5 order-md-1">
        {/* <img src={pic1} width="500px" height="500px"></img> */}
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><image href="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=6&m=149060607&s=612x612&w=0&h=9CQCG-T1Oq2vgBjUEJbxny1OqJAbs6FpbhTQZK36Lxg=" width="500px" height="500px"></image></svg>
      </div>
    </div>

 

    <hr class="featurette-divider"/>

  </div>


  <footer class="container">
    <p class="float-right"><a href="#">Back to top</a></p>
    <p>&copy; Travis Stewart &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
</main>
   
        
    </>      
   );
  }
}
 
export default Home;



