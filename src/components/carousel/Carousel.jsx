import React, { useEffect, useRef, useState } from 'react'
import c from "./Carousel.module.css";
import {FiArrowRight,FiArrowLeft} from "react-icons/fi"


const Carousel = () => {

    const[currentImage, setCurrentImage]  = useState(0);
    const carouselWrapperEl = useRef();

    const images = [
        "https://images-na.ssl-images-amazon.com/images/G/01/boltondt/Alldealslo._CB604891333_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/boltondt/HomeDIYLo._CB604891333_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/boltondt/CellLo._CB604891333_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/boltondt/Alldealslo._CB604891333_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/events/emilykal/T5/hp-desktop/Beauty-200._CB606112435_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/events/emilykal/T5/hp-desktop/Headphones-200._CB606112435_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/events/emilykal/T5/hp-desktop/Furniture-200._CB606112435_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/events/emilykal/T5/hp-desktop/Automotive-200._CB606112435_.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/events/emilykal/T5/hp-desktop/Camera-Photo-200._CB606112435_.jpg"

    ];

    const swipeRight = () => {
       if(currentImage < images.length - 1){
            setCurrentImage(currentImage => currentImage + 1);
       }
      
    }

    const swipeLeft = () => {
        if(currentImage > 0){
            setCurrentImage(currentImage => currentImage - 1);
       }
      
    }

    useEffect(() => {
        carouselWrapperEl.current.scrollLeft = currentImage * carouselWrapperEl.current.offsetWidth;
    },[currentImage])

  return (
    <div className={c.Carousel__wrapper}>

        <h2>Cyber Monday deals make great gifts</h2>
            <div className={c.line__flex}>
                <button className={c.leftBtn} onClick={swipeLeft}><FiArrowLeft/></button>
                <div ref={carouselWrapperEl} className={c.Carousel__item}>
                    {
                        images.map((images , index) => 
                            <img key={index} src={images} alt="Photo" />
                        )
                    }
                </div>
                <button className={c.rightBtn} onClick={swipeRight}><FiArrowRight/></button>
            </div>
    </div>
  )
}

export default Carousel