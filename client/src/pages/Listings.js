import React, { Component } from 'react';
import Axios from 'axios';
import ListCard from '../components/ListCard';
import NewModal from '../components/Modal';
import Spinner1 from '../components/Spinner';
import NavbarMain from '../components/Navbar';
import NavbarSearch from '../components/NavbarSearch';
import {Spring } from 'react-spring/renderprops';


class Listings extends Component {
  state = { 
      listing:[],
      isData: false,
      loading:true,
      location: '',
      state:'',
   }

  handleChange =(e)=>{
    this.setState({
      location: e.target.value
    });
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    console.log(this.state.location)
    
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
        "x-rapidapi-key": "6e9b83a612msh318d3a758266c94p116d02jsnef30ec6cb68f"
      }
    }).then(res=> { 
      console.log(res.data);

      //if no results condition 
      var apiList = res.data.listings;
      this.setState({
        listing: apiList,
        loading: false,
      });
     }); 
  }

  render() { 
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
                  this.state.loading ? <div><Spinner1 /></div> : this.state.listing.map((list,i)=>(

                    <Spring 
                        from={{opacity: 0, marginLeft: -120, marginRight:100}}
                        to={{opacity:1, marginLeft: 0, marginRight: 0}}

                        >
                            { props =>(
                              <div style={props}>
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
                                        
                
                )) 
                }


                
            </div> 
      </div>  
      </>
    );
  }
}
 
export default Listings;