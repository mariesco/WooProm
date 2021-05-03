import React from 'react'
import { NavLink } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import remera from '../assets/img/productos/remera_quina_perfil.jpg'
import campera from '../assets/img/productos/chale_polar_1.jpg'
import taza from '../assets/img/productos/jarro_enlozado.jpg'
import SlidePadre from './SlidePadre'

const SlideNovedades = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 3
        }
      };
      const content =[
        <div>
            <img className="img-fluid" src={remera} alt=""/>
            <NavLink to="/">Ver Producto</NavLink>
        </div>,
        <div>
            <img className="img-fluid" src={campera} alt=""/>
            <NavLink to="/">Ver Producto</NavLink>
        </div>,
        <div>
            <img className="img-fluid" src={taza} alt=""/>
            <NavLink to="/">Ver Producto</NavLink>
        </div>,
        <div>
            <img className="img-fluid" src={remera} alt=""/>
            <NavLink to="/">Ver Producto</NavLink>
        </div>,
        <div>
            <img className="img-fluid" src={campera} alt=""/>
            <NavLink to="/">Ver Producto</NavLink>
        </div>,
        <div>
            <img className="img-fluid" src={taza} alt=""/>
            <NavLink to="/">Ver Producto</NavLink>
        </div>]

        const infinite = true
        const autoPlay = true
        
    return (
      <SlidePadre responsive={responsive} content={content} autoPlay={autoPlay} infinite={infinite} />
    )
}

export default SlideNovedades
