import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom';

const ItemProductosDestacados = ({id, title, stock, description, price, pictureUrl, pictureUrl1, pictureUrl2}) => {
    
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
    return (
    <>
        <Carousel
        arrows={true}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 1.5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
          <NavLink to={`/item/`+ id}>
            <div>
                <img src={pictureUrl} className="img-fluid" alt=""/>
            </div>
            </NavLink>
          <NavLink to={`/item/`+ id}>
            <div>
                <img src={pictureUrl1} className="img-fluid" alt=""/>
            </div>
            </NavLink>
          <NavLink to={`/item/`+ id}>
            <div>
                <img src={pictureUrl2} className="img-fluid" alt=""/>
            </div>
            </NavLink>
        </Carousel>                
            <div className="texto">
              <NavLink to={`/item/`+ id}>
                <h1>{title}</h1>
                <p className="detalle">{description} </p>
                <p>${price} + IVA</p>
              </NavLink>
            </div>
        </>
    )
}

export default ItemProductosDestacados
