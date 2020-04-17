import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import one from "../images/one.jpg";
import two from "../images/two.jpg";



export default class mySlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
            autoplay:true,
          };
          const photos=[
            {
              name:"Photo1",
              url:one

            },
            {
              name:"Photo2",
              url:two
            },
            {
              name:"Photo3",
              url:one
            },
            {
              name:"Photo4",
              url:two
            },
          ]
        return (
            <div className="bottomM mySliderS">
           
            <Slider {...settings}>
            {
              photos.map((a,i)=>{
                return<div key={i}>
                  <img src={a.url} alt={a.name} className="fullScreen"/>
                  </div>
              })
            }
              
            </Slider>
          </div>
        )
    }
}
