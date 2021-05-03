import React from 'react'
import SlideNovedades from './SlideNovedades'
import '../assets/css/novedades.css'


const Novedades = () => {
    return (
        <div id="novedades" className="row">
            <div className="col-12 titulo">
                <div>
                    <h1>Novedades</h1>
                </div>
            </div>
            <div className="col-12 slide-container">
                <SlideNovedades/>
            </div>
        </div>
    )
}

export default Novedades
