import React from 'react'
import acuvue from '../assets/img/logos-clientes/acuvue.png'
import american from '../assets/img/logos-clientes/american.png'
import godrej from '../assets/img/logos-clientes/godrej.png'
import itau from '../assets/img/logos-clientes/itau.png'
import manpower from '../assets/img/logos-clientes/manpower.png'
import movistar from '../assets/img/logos-clientes/movistar.png'
import pluspetrol from '../assets/img/logos-clientes/pluspetrol.png'
import remax from '../assets/img/logos-clientes/remax.png'
import SlidePadre from './SlidePadre'
import '../assets/css/compromiso.css'

const Confianza = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7,
          slidesToSlide: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
      const content =[
        <div>
            <img className="img-fluid" src={acuvue} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={american} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={godrej} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={itau} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={manpower} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={movistar} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={pluspetrol} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={remax} alt=""/>
        </div>
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
