import React from 'react'
import '../assets/css/detalleform.css'
import ItemDetalleForm from './ItemDetalleForm'
import Form from './Form'

const DetalleForm = () => {
    return (
        <div id="DetalleForm" className="row">
            <div className="col-12">
                <p>YA CASI TERMINAMOS</p>
            </div>
            <div className="col-6">
                <ItemDetalleForm/>
                <div>
                    <p>TOTAL <b>$7833,12</b></p>
                </div>
            </div>
            <div className="col-sm-6">
                <Form/>
            </div>
        </div>
    )
}

export default DetalleForm
