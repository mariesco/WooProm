import React from 'react'
import bagsmart from '../assets/img/logos-nuestras-marcas/bagsmart.png'
import benevento from '../assets/img/logos-nuestras-marcas/benevento.png'
import cardon from '../assets/img/logos-nuestras-marcas/cardon.png'
import contigo from '../assets/img/logos-nuestras-marcas/contigo.png'
import cross from '../assets/img/logos-nuestras-marcas/cross.png'
import dunlop from '../assets/img/logos-nuestras-marcas/dunlop.png'
import easytrip from '../assets/img/logos-nuestras-marcas/easytrip.png'
import fasttravel from '../assets/img/logos-nuestras-marcas/FastTravel.png'
import gato from '../assets/img/logos-nuestras-marcas/Gato.png'
import kingtech from '../assets/img/logos-nuestras-marcas/Kingtech.png'
import labaule from '../assets/img/logos-nuestras-marcas/LaBaule.png'
import laguiole from '../assets/img/logos-nuestras-marcas/Laguiole.png'
import leaftcounty from '../assets/img/logos-nuestras-marcas/LeaftCounty.png'
import lumilite from '../assets/img/logos-nuestras-marcas/Lumilite.png'
import moleskine from '../assets/img/logos-nuestras-marcas/Moleskine.png'
import nardalepes from '../assets/img/logos-nuestras-marcas/NardaLepes.png'
import ogio from '../assets/img/logos-nuestras-marcas/Ogio.png'
import pampaspirit from '../assets/img/logos-nuestras-marcas/pampaspirit.png'
import pampero from '../assets/img/logos-nuestras-marcas/Pampero.png'
import papermate from '../assets/img/logos-nuestras-marcas/PaperMate.png'
import parker from '../assets/img/logos-nuestras-marcas/Parker.png'
import pierrecardin from '../assets/img/logos-nuestras-marcas/PierreCardin.png'
import reuseme from '../assets/img/logos-nuestras-marcas/ReuseMe.png'
import roupen from '../assets/img/logos-nuestras-marcas/Roupen.png'
import rubbermaid from '../assets/img/logos-nuestras-marcas/Rubbermaid.png'
import senator from '../assets/img/logos-nuestras-marcas/Senator.png'
import sharpie from '../assets/img/logos-nuestras-marcas/Sharpie.png'
import sistema from '../assets/img/logos-nuestras-marcas/Sistema.png'
import slazenger from '../assets/img/logos-nuestras-marcas/slazenger.png'
import stanley from '../assets/img/logos-nuestras-marcas/Stanley.png'
import swissbags from '../assets/img/logos-nuestras-marcas/Swissbags.png'
import swisspeak from '../assets/img/logos-nuestras-marcas/SwissPeak.png'
import thag from '../assets/img/logos-nuestras-marcas/Thag.png'
import thedailybook from '../assets/img/logos-nuestras-marcas/TheDailyBook.png'
import wagner from '../assets/img/logos-nuestras-marcas/wagner.png'
import waterman from '../assets/img/logos-nuestras-marcas/Waterman.png'
import xdesign from '../assets/img/logos-nuestras-marcas/xdesing.png'
import zecat from '../assets/img/logos-nuestras-marcas/Zecat.png'
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

const Marcas = () => {
      const logo1 = <img className="img-fluid" src= {cardon} alt=""/>
      const logo2 = <img className="img-fluid" src= {bagsmart} alt=""/>
      const logo3 = <img className="img-fluid" src= {benevento} alt=""/>
      const logo4 = <img className="img-fluid" src= {contigo} alt=""/>
      const logo5 = <img className="img-fluid" src= {cross} alt=""/>
      const logo6 = <img className="img-fluid" src= {dunlop} alt=""/>
      const logo7 = <img className="img-fluid" src= {easytrip} alt=""/>
      const logo8 = <img className="img-fluid" src= {fasttravel} alt=""/>
      const logo9 = <img className="img-fluid" src= {gato} alt=""/>
      const logo10 = <img className="img-fluid" src= {kingtech} alt=""/>
      const logo11 = <img className="img-fluid" src= {labaule} alt=""/>
      const logo12 = <img className="img-fluid" src= {laguiole} alt=""/>
      const logo13 = <img className="img-fluid" src= {leaftcounty} alt=""/>
      const logo14 = <img className="img-fluid" src= {lumilite} alt=""/>
      const logo15 = <img className="img-fluid" src= {moleskine} alt=""/>
      const logo16 = <img className="img-fluid" src= {nardalepes} alt=""/>
      const logo17 = <img className="img-fluid" src= {ogio} alt=""/>
      const logo18 = <img className="img-fluid" src= {pampaspirit} alt=""/>
      const logo19 = <img className="img-fluid" src= {pampero} alt=""/>
      const logo20 = <img className="img-fluid" src= {papermate} alt=""/>
      const logo21 = <img className="img-fluid" src= {parker} alt=""/>
      const logo22 = <img className="img-fluid" src= {pierrecardin} alt=""/>
      const logo23 = <img className="img-fluid" src= {reuseme} alt=""/>
      const logo24 = <img className="img-fluid" src= {roupen} alt=""/>
      const logo25 = <img className="img-fluid" src= {rubbermaid} alt=""/>
      const logo26 = <img className="img-fluid" src= {senator} alt=""/>
      const logo27 = <img className="img-fluid" src= {sharpie} alt=""/>
      const logo28 = <img className="img-fluid" src= {sistema} alt=""/>
      const logo29 = <img className="img-fluid" src= {slazenger} alt=""/>
      const logo30 = <img className="img-fluid" src= {stanley} alt=""/>
      const logo31 = <img className="img-fluid" src= {swissbags} alt=""/>
      const logo32 = <img className="img-fluid" src= {swisspeak} alt=""/>
      const logo33 = <img className="img-fluid" src= {thag} alt=""/>
      const logo34 = <img className="img-fluid" src= {thedailybook} alt=""/>
      const logo35 = <img className="img-fluid" src= {wagner} alt=""/>
      const logo36 = <img className="img-fluid" src= {waterman} alt=""/>
      const logo37 = <img className="img-fluid" src= {xdesign} alt=""/>
      const logo38 = <img className="img-fluid" src= {zecat} alt=""/>

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
        <SwiperSlide><ItemClientesMarcas imagen={logo12} /></SwiperSlide>,
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
        <SwiperSlide><ItemClientesMarcas imagen={logo31} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo32} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo33} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo34} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo35} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo36} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo37} /></SwiperSlide>,
        <SwiperSlide><ItemClientesMarcas imagen={logo38} /></SwiperSlide>
        ]
        
    return (
        <div id="marcas" className="row">
            <div className="col-12 titulo">
                <h1>NUESTRAS MARCAS</h1>
            </div>
            <div className="col-12 slide-container">
              <Swiper cssMode={true} slidesPerView={2} loop={true} slidesPerGroup={2} navigation={true} pagination={false} mousewheel={true} keyboard={true} autoplay={true}  className="mySwiper" 
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
               autoplay: true,
               } 

              }}>
                {content}
              </Swiper>
            </div>            
        </div>
    )
}

export default Marcas