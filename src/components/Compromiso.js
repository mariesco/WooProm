import React from 'react'
import '../assets/css/compromiso.css'
import sobre from  "../assets/img/SVG/sobreico.svg";

const Compromiso = () => {
    return (
        <div id="compromiso" className="row">
            <div className="col-sm-4">
                <img className="img-fluid" src={sobre} alt=""/>
                <h1>COMPROMISO</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam consequatur fugiat deserunt.</p>
            </div>
            <div className="col-sm-4">
                <img className="img-fluid" src={sobre} alt=""/>
                <h1 className="calidad">CALIDAD</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam consequatur fugiat deserunt.</p>
            </div>
            <div className="col-sm-4 special">
                <img className="img-fluid" src={sobre} alt=""/>
                <h1>PUNTUALIDAD</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam consequatur fugiat deserunt.</p>
            </div>
        </div>
    )
}

export default Compromiso
