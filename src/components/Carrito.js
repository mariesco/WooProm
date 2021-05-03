import React from 'react'
import '../assets/css/carrito.css'
import ItemCarrito from './ItemCarrito'

const Carrito = () => {
    return (
        <div id="carrito" className="container-fluid">
            <div className="row">
                <div className="col-12 titulo">
                    <p>TU CARRITO</p>
                </div>
                <ItemCarrito/>
                <ItemCarrito/>
                <ItemCarrito/>
                <ItemCarrito/>
                <div className="col-4"></div>
                <div className="col-4 total">
                    <p>TOTAL</p>
                    <button>VOLVER AL CATÁLOGO</button>
                </div>
                <div className="col-4 presupuesto">
                    <p>$7833,12</p>
                    <button>SOLICITAR PRESUPUESTO</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito
