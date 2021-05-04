import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import './slickdemo.css';  
import { UserContext } from "../UserContext";
import { useContext } from "react";
export class SlickDemo extends Component {  
     


  
    render() {  
      
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
              <img  className="img" src= {'assets/1.png'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img style={{"height":"40px"}}   src= {'assets/02.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'assets/03.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'assets/04.jpg'} className="img"/>  
              </div >  
              <div className="wdt">  
              <img  className="img" src= {'assets/05.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'assets/06.jpg'} className="img"/>  
              </div>  
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo  