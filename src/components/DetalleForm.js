import React from 'react'
import '../assets/css/detalleform.css'
import ItemDetalleForm from './ItemDetalleForm'
import Form from './Form'

const DetalleForm = () => {
    return (
        <div id="DetalleForm" className="row">
            <div className="col-12 titulo">
                <p>YA CASI TERMINAMOS</p>
            </div>
            <div className="col-sm-6 detalle2">
                <ItemDetalleForm/>
                <ItemDetalleForm/>
                <ItemDetalleForm/>
                <ItemDetalleForm/>
                <div className="borde"></div>
                <div className="total">
                    <p>TOTAL <b>$7833,12</b></p>
                </div>
            </div>
            <div className="col-sm-6 formulario">
                <Form/>
            </div>
        </div>
    )
}

export default DetalleForm
