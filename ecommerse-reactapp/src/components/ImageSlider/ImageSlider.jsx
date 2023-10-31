import React, { useState } from 'react'
import { sliderData } from "../data1"
import "../ImageSlider/ImageSlider.css";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'

function ImageSlider({ slides }) {
   const [imageIndex, setImageIndex] = useState(0);
   const length=slides.length;

   const nextSlide=()=>{
    setImageIndex(imageIndex === length -1 ? 0: imageIndex +1);
   }

   const prevSlide=()=>{
    setImageIndex(imageIndex === 0 ? length-1 : imageIndex-1);
   }

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }

    return (
        <div className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            {sliderData.map((slide, index) => {
                return (
                    <div className={index === imageIndex ? 'slide active':'slide'} key={index}>
                       {index === imageIndex && (<img className="image" src={slide.image} alt="Image1" />)}                       
                    </div>
                )
            })}
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
    )
}

export default ImageSlider