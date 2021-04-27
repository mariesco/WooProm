import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import remera from '../assets/img/productos/remera_quina_perfil.jpg'
import campera from '../assets/img/productos/chale_polar_1.jpg'
import taza from '../assets/img/productos/jarro_enlozado.jpg'

const SlideNovedades = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };
    return (
      <Carousel
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
            <img src={remera} alt=""/>
        </div>
        <div>
            <img src={campera} alt=""/>
        </div>
        <div>
            <img src={taza} alt=""/>
        </div>
        <div>
            <img src={remera} alt=""/>
        </div>
        <div>
            <img src={campera} alt=""/>
        </div>
        <div>
            <img src={taza} alt=""/>
        </div>
      </Carousel>
    )
}

export default SlideNovedades
