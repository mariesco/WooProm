import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SlidePadre = ({responsive, content, infinite, autoPlay}) => {
    return (
        <Carousel
        arrows={true}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={infinite}
        autoPlay={autoPlay}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 1.5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        {content && content.length >0
         ?content.map(c => {
            return c
        })
        : ''
        }
        </Carousel>
    )
}

export default SlidePadre
