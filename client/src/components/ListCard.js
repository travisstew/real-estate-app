import React from 'react';
import NewModal from './Modal';





function ListCard(props){
    return(
        <div>
          <div class="card" style={{width:`${18}rem`}}>
              <img src={props.photo} style={{height:`${200}px`}} class="card-img-top" alt=""/>
              <div class="card-body">

                
                <h5 class="card-title">{props.price}</h5>
                <h6 >{props.address}</h6>
                <p class="card-text">Beds: {props.beds} | Baths: {props.baths} | Sqft: {props.sqft} </p>
                
                <NewModal
                    
                    listing_id={props.listing_id}
                    property_id={props.property_id}
                 />
            </div>
          </div>    
        </div>
    )

}

export default ListCard;