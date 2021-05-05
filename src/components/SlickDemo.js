import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import React, { useState } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import './slickdemo.css';  
import { UserContext } from "../UserContext";
import { useContext } from "react";



const SlickDemo = () => {
  const   user = useContext(UserContext);
  const [data, setData] = useState([]);
  var settings = {  
    dots: true,  
    infinite: true,  
    speed: 500,  
    centerMode: true,  
    slidesToShow: 1,  
    slidesToScroll: 1  
    };  
  return ( 
    <div>  
    <div class='container' >        
    <div className="row title" style={{marginBottom: "20px"}} >        
    <div class="col-sm-12 btn btn-info">        
    <h2>Suggestion </h2>    
    </div>        
    </div>    
    </div>  
    
      
    <Slider {...settings} >  
    <div className="wdt">  
              <img  className="img" src="../photo/jeans.jpg" className="img"/>  
              </div>  
              <div className="wdt">  
              <img style={{"height":"40px"}}   src="../photo/shirt.jpg" className="img"/>  
              </div>  
              <div className="wdt">  
              <img  style={{"height":"40px"}} src="./photo/jackets.jpg" className="img"/>  
              </div>  
           
       
    </Slider> 
    </div>
    
    
   );
}
 
export default SlickDemo;




