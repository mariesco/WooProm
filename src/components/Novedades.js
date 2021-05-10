import React from 'react'
import SlideNovedades from './SlideNovedades'
import '../assets/css/novedades.css'
import { NavLink } from 'react-router-dom'


const Novedades = ({listado}) => {
    return (
        <div id="novedades" className="row">
            <div className="col-12 titulo">
                <div>
                    <h1>Novedades</h1>
                </div>
            </div>
            <div className="col-12 slide-container">
                <SlideNovedades listado={listado} />
            </div>
            <div className="col-12 boton">
                <NavLink to="/">Mirá todas las novedades {'>'}</NavLink>
            </div>
        </div>
    )
}

export default Novedades
