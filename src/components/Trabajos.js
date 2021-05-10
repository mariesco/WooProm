import React from 'react'
import { NavLink } from 'react-router-dom';
import remera from '../assets/img/productos/remera_quina_perfil.jpg'
import campera from '../assets/img/productos/chale_polar_1.jpg'
import taza from '../assets/img/productos/jarro_enlozado.jpg'
import '../assets/css/trabajos.css'

const Trabajos = () => {
    return (
        <div id="trabajos" className="row">
            <div className="col-12 titulo">
                <div>
                    <h1>NUESTROS TRABAJOS</h1>                    
                </div>
            </div>
            <div className="col-sm-1"></div>            
            <div className="col-sm-2">
                <img className="img-fluid" src={remera} alt=""/>
            </div>
            <div className="col-sm-2">
                <img className="img-fluid" src={campera} alt=""/>
            </div>
            <div className="col-sm-2">
                <img className="img-fluid" src={taza} alt=""/>
            </div>
            <div className="col-sm-2">
                <img className="img-fluid" src={remera} alt=""/>
            </div>
            <div className="col-sm-2">
                <img className="img-fluid" src={campera} alt=""/>
            </div>
            <div className="col-sm-1"></div>
            <div className="col-12 link">
                <NavLink to="/">VER MÁS</NavLink>
            </div>
        </div>
    )
}

export default Trabajos
