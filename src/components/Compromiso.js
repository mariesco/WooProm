import React from 'react'
import '../assets/css/compromiso.css'
import estrella from  "../assets/img/SVG/estrellaico.svg";
import pregunta from  "../assets/img/SVG/preguntaico.svg";
import reloj from  "../assets/img/SVG/relojico.svg";

const Compromiso = () => {
    return (
        <div id="compromiso" className="row">
            <div className="col-sm-4">
                <img className="img-fluid" src={estrella} alt=""/>
                <h1>COMPROMISO</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam consequatur fugiat deserunt.</p>
            </div>
            <div className="col-sm-4">
                <img className="img-fluid" src={pregunta} alt=""/>
                <h1 className="calidad">CALIDAD</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam consequatur fugiat deserunt.</p>
            </div>
            <div className="col-sm-4 special">
                <img className="img-fluid" src={reloj} alt=""/>
                <h1>PUNTUALIDAD</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam consequatur fugiat deserunt.</p>
            </div>
        </div>
    )
}

export default Compromiso
