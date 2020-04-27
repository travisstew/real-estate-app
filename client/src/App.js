import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Listings from './pages/Listings';
import NotFound from './pages/NotFound'
import Details from './pages/Details';
import './home.css';


class App extends Component {
  render() {
    return (
          <Router basename="/" >
      
          
        
              <Switch>
                <Route exact path="/" component={Home}/>  
                <Route  path="/listing"  component={Listings}/>  
                <Route  path="/details"  component={Details}/>  
                <Route component={NotFound}></Route>
                
              </Switch>

           
              
           
          </Router>
          
    );
  }
}
export default App;



