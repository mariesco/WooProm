import React from 'react'
import acuvue from '../assets/img/logos-clientes/acuvue.png'
import american from '../assets/img/logos-clientes/american.png'
import boca from '../assets/img/logos-clientes/boca.png'
import bonafide from '../assets/img/logos-clientes/bonafide.png'
import chubb from '../assets/img/logos-clientes/chubb.png'
import facebook from '../assets/img/logos-clientes/facebook.png'
import farmacity from '../assets/img/logos-clientes/farmacity.png'
import gador from '../assets/img/logos-clientes/gador.png'
import godrej from '../assets/img/logos-clientes/godrej.png'
import herbalife from '../assets/img/logos-clientes/herbalife.png'
import indra from '../assets/img/logos-clientes/indra.png'
import jeep from '../assets/img/logos-clientes/jeep.png'
import johnson from '../assets/img/logos-clientes/johnson.png'
import krah from '../assets/img/logos-clientes/krah.png'
import lomanegra from '../assets/img/logos-clientes/loma-negra.png'
import manpower from '../assets/img/logos-clientes/manpower.png'
import movistar from '../assets/img/logos-clientes/movistar.png'
import msc from '../assets/img/logos-clientes/msc.png'
import newsan from '../assets/img/logos-clientes/newsan.png'
import pluspetrol from '../assets/img/logos-clientes/pluspetrol.png'
import remax from '../assets/img/logos-clientes/remax.png'
import roemmers from '../assets/img/logos-clientes/roemmers.png'
import schneider from '../assets/img/logos-clientes/schneider.png'
import shell from '../assets/img/logos-clientes/shell.png'
import ted from '../assets/img/logos-clientes/ted.png'
import thomson from '../assets/img/logos-clientes/thomson.png'
import toyota from '../assets/img/logos-clientes/toyota.png'
import vichy from '../assets/img/logos-clientes/vichy.png'
import yacyreta from '../assets/img/logos-clientes/yacyreta.png'
import ypf from '../assets/img/logos-clientes/ypf.png'
import ItemClientesMarcas from './ItemClientesMarcas'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import '../assets/css/compromiso.css'

// import Swiper core and required modules
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const Confianza = () => {
      
      const logo1 = <img className="img-fluid" src= {acuvue} alt=""/>
      const logo2 = <img className="img-fluid" src= {american} alt=""/>
      const logo3 = <img className="img-fluid" src= {boca} alt=""/>
      const logo4 = <img className="img-fluid" src= {bonafide} alt=""/>
      const logo5 = <img className="img-fluid" src= {chubb} alt=""/>
      const logo6 = <img className="img-fluid" src= {facebook} alt=""/>
      const logo7 = <img className="img-fluid" src= {farmacity} alt=""/>
      const logo8 = <img className="img-fluid" src= {gador} alt=""/>
      const logo9 = <img className="img-fluid" src= {godrej} alt=""/>
      const logo10 = <img className="img-fluid" src= {herbalife} alt=""/>
      const logo11 = <img className="img-fluid" src= {indra} alt=""/>
      const logo13 = <img className="img-fluid" src= {jeep} alt=""/>
      const logo14 = <img className="img-fluid" src= {johnson} alt=""/>
      const logo15 = <img className="img-fluid" src= {krah} alt=""/>
      const logo16 = <img className="img-fluid" src= {lomanegra} alt=""/>
      const logo17 = <img className="img-fluid" src= {manpower} alt=""/>
      const logo18 = <img className="img-fluid" src= {movistar} alt=""/>
      const logo19 = <img className="img-fluid" src= {msc} alt=""/>
      const logo20 = <img className="img-fluid" src= {newsan} alt=""/>
      const logo21 = <img className="img-fluid" src= {pluspetrol} alt=""/>
      const logo22 = <img className="img-fluid" src= {remax} alt=""/>
      const logo23 = <img className="img-fluid" src= {roemmers} alt=""/>
      const logo24 = <img className="img-fluid" src= {schneider} alt=""/>
      const logo25 = <img className="img-fluid" src= {shell} alt=""/>
      const logo26 = <img className="img-fluid" src= {ted} alt=""/>
      const logo27 = <img className="img-fluid" src= {thomson} alt=""/>
      const logo28 = <img className="img-fluid" src= {toyota} alt=""/>
      const logo29 = <img className="img-fluid" src= {vichy} alt=""/>
      const logo30 = <img className="img-fluid" src= {yacyreta} alt=""/>
      const logo31 = <img className="img-fluid" src= {ypf} alt=""/>

      const content =[
        <SwiperSlide><ItemClientesMarcas imagen={logo1} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo2} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo3} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo4} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo5} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo6} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo7} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo8} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo9} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo10} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo11} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo13} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo14} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo15} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo16} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo17} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo18} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo19} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo20} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo21} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo22} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo23} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo24} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo25} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo26} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo27} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo28} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo29} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo30} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo31} /></SwiperSlide>
        ]

    return (
        <div id="confianza" className="row">
            <div className="col-12 titulo">
                <h1>CONFÍAN EN NOSOTROS</h1>
            </div>
            <div className="col-12 slide-container">
              <Swiper cssMode={true} slidesPerView={2} loop={true} slidesPerGroup={2} navigation={true} pagination={false} mousewheel={true} keyboard={true} autoplay={{ "delay": 2500,  "disableOnInteraction": false}} className="mySwiper" 
              breakpoints={{
               576 : {
               slidesPerView: 4,
               slidesPerGroup: 4,
               pagination: true,
               },
               1045 : {
               slidesPerView: 7,
               slidesPerGroup: 7,
               pagination: true,
               } 
              }}>
                {content}
              </Swiper>
            </div>            
        </div>
    )
}

export default Confianza
