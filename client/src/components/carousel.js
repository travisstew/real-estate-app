import React from 'react';
// import BackgroundSlider from 'react-background-slider'
import img from '../images/house1.jpg';
import img2 from '../images/house2.jpeg'
import Slider from 'react-slick';
import styled from 'styled-components';

const Wrapper = styled.div `width: 100%`;
const Page = styled.div `width: 100%`;

  

function Carousel(){
  return(

    <Wrapper>
         <Slider speed={500} 
                  slidesToShow={1} 
                  slidesToScroll={1} 
                  infinite={true} 
                  
                  autoplay={true}
                  autoplaySpeed={3000}
                  fade={true}
                  >
         <Page>
            <img src={img} alt="house"></img>
         </Page>     
         <Page>
            <img src={img2} alt="house"></img>
         </Page>     
         <Page>
            <img src={img} alt="house"></img>
         </Page>     

         </Slider>
    </Wrapper>
  )
}

export default Carousel;
