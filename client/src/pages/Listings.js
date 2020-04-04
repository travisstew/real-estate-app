import React, { Component } from 'react';
import Axios from 'axios';
import ListCard from '../components/ListCard';

class Listings extends Component {
  state = { 
      listing:[],
      isData: false,
   }


  componentDidMount(){

    const city  = this.props.location.state.city;
    city.toLowerCase();
    const state = this.props.location.state.newState;
    state.toLowerCase();

    Axios({
      method: 'get', 
      url: `https://realtor.p.rapidapi.com/properties/list-for-sale?sort=relevance&radius=10&city=${city}&offset=0&limit=20&state_code=${state}`,
      // data: {id: varID},
      headers: {
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "00b956d7c8msh458ab8d1c20369dp182f31jsn413e2da1e3e2"
      }
    }).then(res=> { 
      console.log(res.data);
      
  
     
      //if no results condition 
      var apiList = res.data.listings;
      this.setState({
        listing: apiList
      })

     });
    
  }
  render() { 
 
    
    return ( 
      <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
              
                {  this.state.listing.map(list=>(
                    <ListCard 
                        key={list.property_id}
                        price={list.price} 
                        photo={list.photo}
                        address={list.address}
                        beds={list.beds}
                        baths={list.baths}
                        sqft={list.sqft}
                        listing_id={list.listing_id}
                        property_id={list.property_id}
                      />
                ))}    
            </div> 
      </div>  
    );
  }
}
 
export default Listings;