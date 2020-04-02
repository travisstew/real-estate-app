import React, { Component } from 'react';
import Axios from 'axios';
import ListCard from '../components/ListCard';

class Listings extends Component {
  state = { 
      listing:[],
   }


  componentDidMount(){
    console.log(this.props.match.params.location)
    Axios({
      method: 'get', 
      url: 'https://realtor.p.rapidapi.com/properties/list-for-sale?sort=relevance&radius=10&city=chester&offset=0&limit=20&state_code=va',
      // data: {id: varID},
      headers: {
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "00b956d7c8msh458ab8d1c20369dp182f31jsn413e2da1e3e2"
      }
    }).then(res=> { 
      // console.log(res.data.listings);
      var apiList = res.data.listings;
      this.setState({
        listing: apiList
      })
      
      
     });
    
  }
  render() { 
    console.log(this.state.listing);
    
    return ( 
      <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                {this.state.listing.map(list=>(
                    <ListCard 
                        price={list.price} 
                        photo={list.photo}
                        address={list.address}
                        beds={list.beds}
                        baths={list.baths}
                        sqft={list.sqft}
                      />
                ))}    
            </div> 
      </div>  
    );
  }
}
 
export default Listings;