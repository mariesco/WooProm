import React from 'react'
import producto1 from '../assets/img/productos/hl8703_00.jpg'
import producto2 from '../assets/img/productos/C531_perfil-247x296.jpg'
import SlidePadre from './SlidePadre'
import SlideItemDestacados from './SlideItemDestacadoss'
import { NavLink } from 'react-router-dom'

const SlideDestacados = () => {
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

      const infinite = true
      const autoPlay = true
      
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
      <SlideItemDestacados imagen={imagen1} texto={texto1} /> ,
      <SlideItemDestacados imagen={imagen2} texto={texto1} />,
      <SlideItemDestacados imagen={imagen1} texto={texto1} /> ,
      <SlideItemDestacados imagen={imagen2} texto={texto1} />
    ]

    return (
        <SlidePadre responsive={responsive} content={content} autoPlay={autoPlay} infinite={infinite} />
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