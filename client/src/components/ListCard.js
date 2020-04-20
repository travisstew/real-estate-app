import React from 'react';
import {Link} from 'react-router-dom';

function ListCard(props){
    return(
        <div >
          <div class="card" style={{width:`${18}rem`}}>
              <img src={props.photo} style={{height:`${200}px`}} class="card-img-top" alt=""/>
              <div class="card-body">
                
                <h5 class="card-title">{props.price}</h5>
                <h6 >{props.address}</h6>
                <p class="card-text">Beds: {props.beds} | Baths: {props.baths} | Sqft: {props.sqft} </p>
                
                <Link to={{pathname:'/details', state: {listId: props.listing_id, propertyId: props.property_id }}}>Get Details</Link>
                
              
            </div>
          </div>    
        </div>
    )

}

export default ListCard;