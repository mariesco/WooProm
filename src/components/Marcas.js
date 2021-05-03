import React from 'react'
import cardon from '../assets/img/logos-nuestras-marcas/cardon.png'
import baule from '../assets/img/logos-nuestras-marcas/la-baule.png'
import pampaspirit from '../assets/img/logos-nuestras-marcas/pampaspirit.png'
import slazenger from '../assets/img/logos-nuestras-marcas/slazenger.png'
import wagner from '../assets/img/logos-nuestras-marcas/wagner.png'
import SlidePadre from './SlidePadre'
import '../assets/css/compromiso.css'

const Marcas = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
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
            <img className="img-fluid" src={cardon} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={baule} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={pampaspirit} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={slazenger} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={wagner} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={cardon} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={baule} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={pampaspirit} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={slazenger} alt=""/>
        </div>,
        <div>
            <img className="img-fluid" src={wagner} alt=""/>
        </div>
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