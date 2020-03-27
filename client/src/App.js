import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (
    <>  
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>  
          {/* <Route component={NotFound}></Route> */}
          
        </Switch>

      </Router>

    </>

  );
}

export default App;
