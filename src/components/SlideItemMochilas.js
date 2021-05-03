import React from 'react'
import SlidePadre from './SlidePadre'
import mochila from '../assets/img/productos/C531_perfil-247x296.jpg'
import mochila2 from '../assets/img/productos/hl8703_00.jpg'

const SlideItemMochilas = () => {
    
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
      const autoPlay = false

      const content = [<img src={mochila} alt=""/>, <img src={mochila2} alt=""/>] 
    return (
        <SlidePadre responsive={responsive} content={content} autoPlay={autoPlay} infinite={infinite}/>
    )
}

export default SlideItemMochilas
