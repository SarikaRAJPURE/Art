import React, { useState } from 'react'
import "./Slider.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
//import { sliderItems } from "../data";
import { Link } from 'react-router-dom';
const Slider = ({ slides }) => {
    console.log({ slides });
    const [slideIndex, setSlideIndex] = useState(0);
    const length = slides.length;
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
        } else {
            setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
        }
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (

        <div className='slider'>
            <div className="arrow" style={{ left: 10 }} onClick={() => { handleClick("left") }}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </div>
            <div className="wrapper" >
                {slides.map((slide, index) => (
                    index === slideIndex && (
                        <div className={index === slideIndex ? 'slide active' : 'slide'} key={slide.id} style={{ backgroundColor: slide.bg }}>
                            <div className="imgcontainer">
                                <img className="image" src={slide.img} alt="Image1" />
                            </div>
                            <div className="infocontainer">
                                <h1 className='title'>{slide.title}</h1>
                                <p className='description'>{slide.description}</p>
                                <Link to='/shop' style={{ color: 'inherit', textDecoration: 'none' }}><button className='btn'>SHOP NOW</button></Link>
                            </div>
                        </div>
                    )
                ))}

            </div>
            <div className="arrow" style={{ right: 10 }} onClick={() => handleClick("right")}>
                <FontAwesomeIcon icon={faCaretLeft} rotation={180} />
            </div>
        </div>


    )
}

export default Slider