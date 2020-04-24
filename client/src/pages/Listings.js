import React, { Component } from 'react';
import Axios from 'axios';
import ListCard from '../components/ListCard';
import Spinner1 from '../components/Spinner';
import NavbarSearch from '../components/NavbarSearch';
import {Spring } from 'react-spring/renderprops';
import NewSearch from '../components/NewSearch'

class Listings extends Component {
  state = { 
      listing:[],
      isData: false,
      loading:true,
      location: '',
      state:'',
   }
   static listing = [];
  handleChange =(e)=>{
    this.setState({
      location: e.target.value
    });
  }

  handleSubmit = (e)=>{
    e.preventDefault(); 
 }


  componentDidMount(){

    const city  = this.props.location.state.city;
    city.toLowerCase();
    const state = this.props.location.state.newState;
    state.toLowerCase();

    Axios.put('/api/listing', {city:city, state:state}).then(res=>{
      
     this.setState({
        listing: res.data.listings,
        loading: false,
      });    
    });
  
  }

  render() { 
    
    const display = this.state.listing || [];

    return ( <>
      {/* <NavbarMain /> */}
      <NavbarSearch
          onChangeHandle = {this.handleChange}
          onSubmitHandle = {this.handleSubmit}
          location = {this.state.location}
      />

      <div className="container">
            <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center"}}>

                {
                  this.state.loading ? <div><Spinner1 /></div> : display.length > 0 ?  
                  
                  this.state.listing.map((list,i)=>(

                    <Spring 
                        from={{opacity: 0, marginLeft: -120, marginRight:100}}
                        to={{opacity:1, marginLeft: 0, marginRight: 0}}

                        >
                            { props =>(
                              <div className="new-hover" style={props}>
                      <div className="listing-card">
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
                                    
                                        </div>
                              </div>
                            )}
                          </Spring>
  
                ) 
                
                ): <NewSearch />}


                
            </div> 
      </div>  
      </>
    );
  }
}
 
export default Listings;