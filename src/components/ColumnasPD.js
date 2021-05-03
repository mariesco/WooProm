import React from 'react'
import rem from '../assets/img/productos/remera_quina_perfil.jpg'
import camp from '../assets/img/productos/chale_polar_1.jpg'
import tazaenlozada from '../assets/img/productos/jarro_enlozado.jpg'
import ItemPD from './ItemProductosDestacados'
import SlidePadre from './SlidePadre'

const ColumnasPD = () => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      const remera = <img className="img-fluid" src= {rem} alt=""/>
      const campera = <img className="img-fluid" src= {camp} alt=""/>
      const taza = <img className="img-fluid" src= {tazaenlozada} alt=""/>

      const texto1 = [
        <div className="texto">
          <h1>REMERAS</h1>
          <p className="detalle">Remera Cardon</p>
          <p>$665,99 + IVA</p>
        </div>]

    const content = [
        <ItemPD imagen={remera} texto={texto1} /> ,
        <ItemPD imagen={campera} texto={texto1} />,
        <ItemPD imagen={taza} texto={texto1} />
    ]
    
    const autoPlay = true
    const infinite = true

    return (
        <>
        
        <div className="col-sm-1"></div>
        <div className="col-sm-2">
            <SlidePadre responsive={responsive} content={content} autoPlay={autoPlay} infinite={infinite} />
        </div>
        <div className="col-sm-2">
            <SlidePadre responsive={responsive} content={content} autoPlay={autoPlay} infinite={infinite} />
        </div>
        <div className="col-sm-2">
            <SlidePadre responsive={responsive} content={content} autoPlay={autoPlay} infinite={infinite} />
        </div>
        <div className="col-sm-2">
            <SlidePadre responsive={responsive} content={content} autoPlay={autoPlay} infinite={infinite} />
        </div>
        <div className="col-sm-2">
            <SlidePadre responsive={responsive} content={content} autoPlay={autoPlay} infinite={infinite} />
        </div>
        <div className="col-sm-1"></div>
            
        </>
    )
}

export default ColumnasPD
