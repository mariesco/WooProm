import React from 'react'
import mochila from '../assets/img/productos/C531_perfil-247x296.jpg'

const ItemDetalleForm = () => {
    return (
        <div className="row">
            <div className="col-2">
                <img src={mochila} alt=""/>
            </div>
            <div className="col-10">
                <p className="modelo">C531 / Mochila "Fort"</p>
                <p className="detalle">xl <b>$1970.78</b></p>
            </div>
        </div>
    )
}

export default ItemDetalleForm
