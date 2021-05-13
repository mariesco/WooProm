import React from 'react'
import producto1 from '../assets/img/productos/hl8703_00.jpg'
import producto2 from '../assets/img/productos/C531_perfil-247x296.jpg'
import SlidePadre from './SlidePadre'
import SlideItemDestacados from './SlideItemDestacadoss'
import { NavLink } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const SlideDestacados = () => {
      
      const imagen1 = <img className="img-fluid imagen" src= {producto1} alt=""/>

      const texto1 = [
        <div className="col-sm-6 texto">
          <h1>Mochila porta notebook ORLANDO<br/>
          MA-028703</h1>
          <p>Mochila porta Notebook. Presenta dos bolsillos en el frente
          con cierre oculto y en la parte superior central una chapa
          de 5cm x 1cm para poder grabar una inscripción. Luego
          dos compartimientos, el primero con un cierre doble, el
          segundo y principal, también con cierre doble que contiene
          sobre el sector de la espalda el bolsillo porta notebook con
          sujetador con velcro con capacidad para introducir una
          notebook de hasta 17&Prime.</p>
          <p className="d-inline precio">$1.970,78</p>
          <NavLink to="/">Ver producto</NavLink>
        </div>]
        
      const imagen2 = <img className="img-fluid" src= {producto2} alt=""/>
    const content = [
      <SwiperSlide><SlideItemDestacados imagen={imagen1} texto={texto1}/></SwiperSlide>,
      <SwiperSlide><SlideItemDestacados imagen={imagen2} texto={texto1}/></SwiperSlide>,
      <SwiperSlide><SlideItemDestacados imagen={imagen1} texto={texto1}/></SwiperSlide>,
      <SwiperSlide><SlideItemDestacados imagen={imagen2} texto={texto1}/></SwiperSlide>
    ]

    return (
      <Swiper cssMode={true} loop={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
        {content}
      </Swiper>
    )
}

export default SlideDestacados


/*
      <div className="row">
        <div className="col-6">
          <img className="img-fluid" src={producto1} alt=""/>
        </div>
        <div className="col-6">
          <h1></h1>
          <p></p>
          <p className="d-inline"></p>
          <NavLink to="/"></NavLink>
        </div>
      </div>
      */