import React from 'react'
import slide from '../assets/img/indumentaria.png'
import slide1 from '../assets/img/pampero.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import '../assets/css/slide1.css'
// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);


const Slide1 = () => {
const content = [
    <SwiperSlide>
      <div>
        <img className="img-fluid" src={slide} alt=""/>
      </div>
    </SwiperSlide>,
    <SwiperSlide>
      <div>
        <img className="img-fluid" src={slide1} alt=""/>
      </div>
    </SwiperSlide>,
    <SwiperSlide>
      <div>
        <img className="img-fluid" src={slide} alt=""/>
      </div>
    </SwiperSlide>,
    <SwiperSlide>
      <div>
        <img className="img-fluid" src={slide1} alt=""/>
      </div>
    </SwiperSlide>]
    /*const content = [
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
    ]*/

    
    return (
      <Swiper cssMode={true} loop={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
        {content}
      </Swiper>
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
