import React, { Component } from 'react';
import Axios from 'axios';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import Spinner1 from '../components/Spinner';
import NavbarMain from '../components/Navbar';




class Details extends Component {
  state = { 
    listDetails:{},
    images:[],
    loading: true,

   }


  componentDidMount(){
    const listId = this.props.location.state.listId;
    const propertyId = this.props.location.state.propertyId

    Axios.put('/api/details', {listId: listId, propertyId: propertyId}).then(res=>{

      this.setState({
            listDetails: res.data.dataDetail,
            images: res.data.dataDetail.listing.photos,
            loading: false,
          });

    });

  
    }

  render() { 
    
      
      return (
      <>  

      <NavbarMain />
        {this.state.loading ? <div><Spinner1 /> </div> :  <div className="wrapper-div"> <ImageGallery items={
              this.state.images.map(e=>(
                        {
                          original: e.href,
                          thumbnail:e.href
                        }
                      ))}  
           />
                    <div className="container">
                      <div>
                        <p>${this.state.listDetails.listing.price}</p>
                        <p>{this.state.listDetails.listing.beds} Beds | {this.state.listDetails.listing.baths} Baths | {this.state.listDetails.listing.sqft} Sqft</p>
                        <p>{this.state.listDetails.listing.address.line}, {this.state.listDetails.listing.address.city}, {this.state.listDetails.listing.address.state_code}, {this.state.listDetails.listing.address.postal_code} </p>
                        <p>{this.state.listDetails.listing.description}</p>
                      </div>
                    </div>
                    
                 
           </div>}
          

        


          
        
    
    </>
    );
  }
}
 
export default Details;