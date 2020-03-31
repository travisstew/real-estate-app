import React from 'react';





function ListCard(props){
      console.log(props.listing);
      


    return(
        <div>
          <div class="card" style={{width:`${18}rem`}}>
              <img src={props.photo} style={{height:`${200}px`}} class="card-img-top" alt=""/>
              <div class="card-body">

                
                <h5 class="card-title">{props.price}</h5>
                <h6 >{props.address}</h6>
                <p class="card-text">Beds: {props.beds} | Baths: {props.baths}  </p>
                
                <a href="" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>    
        </div>
    )

}

export default ListCard;