import React from 'react'
import SlideNovedades from './SlideNovedades'
import '../assets/css/novedades.css'


const Novedades = () => {
    return (
        <div className="row">
            <div className="col-12">
                <h1>Novedades</h1>
            </div>
            <div className="col-12">
                <SlideNovedades/>
            </div>
        </div>
    )
}

export default Novedades
