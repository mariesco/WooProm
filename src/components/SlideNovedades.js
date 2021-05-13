import React from 'react'
import { NavLink } from 'react-router-dom';
import remera from '../assets/img/productos/remera_quina_perfil.jpg'
import campera from '../assets/img/productos/chale_polar_1.jpg'
import taza from '../assets/img/productos/jarro_enlozado.jpg'
import ItemNovedades from './ItemNovedades';
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

const SlideNovedades = ({listado}) => {
      const content =[
          listado.map(a => {
            return <SwiperSlide><ItemNovedades  key={a.id} id={a.id} pictureUrl={a.pictureUrl}  /></SwiperSlide>
          })]

        
    return (
      <>
      <Swiper cssMode={true} slidesPerView={2} loop={true} slidesPerGroup={2} navigation={true} pagination={false} mousewheel={true} keyboard={true} className="mySwiper" 
      breakpoints={{
       576 : {
       slidesPerView: 3,
       slidesPerGroup: 3,
       pagination: true,
       },
       1045 : {
       slidesPerView: 5,
       slidesPerGroup: 5,
       pagination: true,
       } 
      }}>
        {content}
      </Swiper>
      </>
      
    )
}

export default SlideNovedades
