import React from 'react'
import '../assets/css/prefooter.css'
import {NavLink} from 'react-router-dom'
import facebook from  "../assets/img/SVG/faceico.svg";
import instagram from  "../assets/img/SVG/instagramico.svg";
import twitter from  "../assets/img/SVG/twtico.svg";
import linkedin from  "../assets/img/SVG/linkedinico.svg";
import ubicacion from  "../assets/img/SVG/ubicacionico.svg";
import sobre from  "../assets/img/SVG/sobreico.svg";



const PreFooter = () => {
    return (
        <div id="prefooter" className="row">
            <div className="col-sm-4">
                <NavLink to="/">NOSOTROS</NavLink>
                <NavLink to="/">FAQ</NavLink>
                <NavLink to="/">NUESTROS TRABAJOS</NavLink>
                <NavLink to="/">DESARROLLOS ESPECIALES</NavLink>
                <NavLink to="/">CATÁLOGOS</NavLink>
                <NavLink to="/">CONTACTO</NavLink>
            </div>
            <div className="col-sm-4">
                <h1>REDES</h1>
                <NavLink to="/"><img src={instagram} alt=""/> @WOOPROM</NavLink>
                <NavLink to="/"><img src={facebook} alt=""/> WOOPROM</NavLink>
                <NavLink to="/"><img src={twitter} alt=""/> @WOOPROM</NavLink>
                <NavLink to="/"><img src={linkedin} alt=""/> WOOPROM</NavLink>
            </div>
            <div className="col-sm-4 escribinos">
                <h1><img src={sobre} alt=""/> ESCRIBINOS...</h1>
                <NavLink to="/"> info@wooprom.com</NavLink>
                <NavLink to="/"><img src={ubicacion} alt=""/> Libertad 1583 - CABA</NavLink>
                <NavLink className="consultanos" to="/">CONSULTANOS</NavLink>
            </div>
        </div>
    )
}


export default PreFooter
