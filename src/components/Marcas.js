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
import SlidePadre from './SlidePadre'
import '../assets/css/compromiso.css'

const Marcas = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7,
          slidesToSlide: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
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
        <ItemClientesMarcas imagen={logo1} />,
        <ItemClientesMarcas imagen={logo2} />,
        <ItemClientesMarcas imagen={logo3} />,
        <ItemClientesMarcas imagen={logo4} />,
        <ItemClientesMarcas imagen={logo5} />,
        <ItemClientesMarcas imagen={logo6} />,
        <ItemClientesMarcas imagen={logo7} />,
        <ItemClientesMarcas imagen={logo8} />,
        <ItemClientesMarcas imagen={logo9} />,
        <ItemClientesMarcas imagen={logo10} />,
        <ItemClientesMarcas imagen={logo11} />,
        <ItemClientesMarcas imagen={logo12} />,
        <ItemClientesMarcas imagen={logo13} />,
        <ItemClientesMarcas imagen={logo14} />,
        <ItemClientesMarcas imagen={logo15} />,
        <ItemClientesMarcas imagen={logo16} />,
        <ItemClientesMarcas imagen={logo17} />,
        <ItemClientesMarcas imagen={logo18} />,
        <ItemClientesMarcas imagen={logo19} />,
        <ItemClientesMarcas imagen={logo20} />,
        <ItemClientesMarcas imagen={logo21} />,
        <ItemClientesMarcas imagen={logo22} />,
        <ItemClientesMarcas imagen={logo23} />,
        <ItemClientesMarcas imagen={logo24} />,
        <ItemClientesMarcas imagen={logo25} />,
        <ItemClientesMarcas imagen={logo26} />,
        <ItemClientesMarcas imagen={logo27} />,
        <ItemClientesMarcas imagen={logo28} />,
        <ItemClientesMarcas imagen={logo29} />,
        <ItemClientesMarcas imagen={logo30} />,
        <ItemClientesMarcas imagen={logo31} />,
        <ItemClientesMarcas imagen={logo32} />,
        <ItemClientesMarcas imagen={logo33} />,
        <ItemClientesMarcas imagen={logo34} />,
        <ItemClientesMarcas imagen={logo35} />,
        <ItemClientesMarcas imagen={logo36} />,
        <ItemClientesMarcas imagen={logo37} />,
        <ItemClientesMarcas imagen={logo38} />
        ]

        const infinite = true
        const autoPlay = true
        
    return (
        <div id="marcas" className="row">
            <div className="col-12 titulo">
                <h1>NUESTRAS MARCAS</h1>
            </div>
            <div className="col-12 slide-container">
                <SlidePadre responsive={responsive} content={content} infinite={infinite} autoPlay={autoPlay} />
            </div>            
        </div>
    )
}

export default Marcas