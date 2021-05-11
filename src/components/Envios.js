import React from 'react'
import camion from '../assets/img/SVG/truckico.svg'
import '../assets/css/envios.css'

const Envios = () => {
    return (
        <div id="envios" className="row">
            <div className="col-sm-6">
                <img className="img-fluid" src={camion} alt=""/>
            </div>
            <div className="col-sm-6 text">
                <div>
                    <h1>ENVÍOS A TODO</h1>
                    <h2>EL PAÍS</h2>
                </div>
            </div>
        </div>
    )
}

export default Envios
