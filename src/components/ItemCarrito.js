import React from 'react'
import Contador from './Contador'
import mochila from '../assets/img/productos/C531_perfil-247x296.jpg'

const ItemCarrito = () => {
    return (
        <div className="col-12 lista">
            <div className="row">
            <div className="col-6">
                <div className="row">
                    <div className="col-3">
                        <img src={mochila} alt=""/>
                    </div>
                    <div className="col-9">
                        <p className="modelo">C531 / Mochila "Fort"</p>
                        <p className="detalle">Precio Unitario: AR$1970.78</p>
                    </div>
                </div>
            </div>
            <div className="col-3 count">
                <Contador/>
            </div>
            <div className="col-3 precio">
                <p>$1.970,78</p>
            </div>
            </div>
        </div>
    )
}

export default ItemCarrito
