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
import SlidePadre from './SlidePadre'
import ItemClientesMarcas from './ItemClientesMarcas'
import '../assets/css/compromiso.css'

const Confianza = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7,
          slidesToSlide: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
          slidesToSlide: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
      
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
        <ItemClientesMarcas imagen={logo31} />
        ]

        const infinite = true
        const autoPlay = true
    return (
        <div id="confianza" className="row">
            <div className="col-12 titulo">
                <h1>CONFÍAN EN NOSOTROS</h1>
            </div>
            <div className="col-12 slide-container">
                <SlidePadre responsive={responsive} content={content} infinite={infinite} autoPlay={autoPlay} />
            </div>            
        </div>
    )
}

export default Confianza
