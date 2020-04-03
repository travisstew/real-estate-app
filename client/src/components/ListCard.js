import React from 'react';





function ListCard(props){
    return(
        <div>
          <div class="card" style={{width:`${18}rem`}}>
              <img src={props.photo} style={{height:`${200}px`}} class="card-img-top" alt=""/>
              <div class="card-body">

                
                <h5 class="card-title">{props.price}</h5>
                <h6 >{props.address}</h6>
                <p class="card-text">Beds: {props.beds} | Baths: {props.baths} | Sqft: {props.sqft} </p>
                
                <a href="" data-property_id={props.property_id} data-listing_id={props.listing_id}  class="btn btn-primary">Go somewhere</a>
            </div>
          </div>    
        </div>
    )

}

export default ListCard;