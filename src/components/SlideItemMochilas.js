import React from 'react'
import mochila from '../assets/img/productos/C531_perfil-247x296.jpg'
import mochila2 from '../assets/img/productos/hl8703_00.jpg'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
const SlideItemMochilas = ({imagenes}) => {

      const images = [
        {
          original: `${imagenes[0]}`,
          thumbnail: `${imagenes[0]}`,
        },
        {
          original: `${imagenes[1]}`,
          thumbnail: `${imagenes[1]}`,
        },
        {
          original: `${imagenes[2]}`,
          thumbnail: `${imagenes[2]}`,
        },
      ];
    return (
        
        <ImageGallery items={images} showPlayButton={false} className="img-fluid" />
    )
}

export default SlideItemMochilas
