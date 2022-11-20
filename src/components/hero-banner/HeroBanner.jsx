import { useState,useEffect,useRef} from 'react';
import c from "./HeroBanner.module.css";
import images from "../../dummy-data.json" 
import {FiArrowRight,FiArrowLeft} from "react-icons/fi"

const HeroBanner = () => {

    const carouselWrapperEl = useRef();


    const [currentImage,setCurrentImage] = useState(0);

    const swipeRight = () => {
        if(currentImage < images.length - 1){
            setCurrentImage(currentImage =>  currentImage + 1)
        }
        else{
            setCurrentImage(0)
        }
    }

    const swipeLeft = () => {
        if(currentImage > 0){
            setCurrentImage(currentImage => currentImage - 1)
        }
        else{
            setCurrentImage(images.length -1)
        }
    }

    useEffect(() => {
        carouselWrapperEl.current.scrollLeft = currentImage * carouselWrapperEl.current.offsetWidth;
    }, [currentImage])

    useEffect(() => {
        setInterval(() => {
            setCurrentImage(currentImage => currentImage + 1)
        },3000)
    },[])

  return (
      <div className={c.carousel}>

          <button data-btn-type='left' className={c.carousel__btn} onClick={swipeLeft}><FiArrowLeft/></button>

        <div className={c.carouselWrapper} ref={carouselWrapperEl}>

          {images.map((carouselItem,index) => (

              <div key={index}>
                  <img
                      className={c.carouselItem}
                      src={carouselItem}
                      alt="ImagesCarousel"
                  />
              </div>

          ))}

        </div>
        <div className={c.dots}>
              {
                  images.map((dot, index) =>
                      <div onClick={() => {
                          setCurrentImage(index)
                      }}
                      style={currentImage === index ? {background: "seashell", transform: "scale(1.3)"}: null}
                      className={c.dot} key={index}></div>
                  )
              }
        </div>
          <button data-btn-type='right' className={c.carousel__btn} onClick={swipeRight}><FiArrowRight/></button>

      </div>
  );
}

export default HeroBanner