import React from 'react'
import slide from '../assets/img/MenuDesktop.jpg'
import slide1 from '../assets/img/parallax.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../assets/css/slide1.css'
import SlidePadre from './SlidePadre'

const Slide1 = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const content = [
      <div>
        <img className="img-fluid" src={slide} alt=""/>
      </div>,
      <div>
        <img className="img-fluid" src={slide1} alt=""/>
      </div>,
      <div>
        <img className="img-fluid" src={slide} alt=""/>
      </div>,
      <div>
        <img className="img-fluid" src={slide1} alt=""/>
      </div>
    ]

    const autoPlay = true
    const infinite = true
    
    return (
      <SlidePadre responsive={responsive} content={content} autoPlay={autoPlay} infinite={infinite}/>
      /*<Carousel
      arrows={true}
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 1.5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px">
        <div>
            <img src={slide} alt=""/>
        </div>
        <div>
            <img src={slide1} alt=""/>
        </div>
        <div>
            <img src={slide} alt=""/>
        </div>
        <div>
            <img src={slide1} alt=""/>
        </div>
      </Carousel>*/
    )
}

export default Slide1
