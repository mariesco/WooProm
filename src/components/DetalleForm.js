import React, { useContext, useState } from 'react'
import {CartContext} from '../context/cartContext'
import { NavLink } from 'react-router-dom'
import DetalleItemCheckout from './DetalleItemCheckout'
import FormChekout from './FormCheckout'
import '../assets/css/detalleform.css'
import ItemDetalleForm from './ItemDetalleForm'
import Form from './Form'

const DetalleForm = () => {

    const { totalCarro, carro } = useContext(CartContext)

    return (
        <div id="DetalleForm" className="row">
            {
                totalCarro !== 0 ?
                <>
                <div className="col-12 titulo">
                    <p>YA CASI TERMINAMOS</p>
                </div>
                <div className="col-sm-6 detalle2">
                    
                {
                carro.map(a => {
                    return <DetalleItemCheckout key={a.id} id={a.   id} price={a.precio} quantity={a.quantity} pictureUrl= { a.pictureUrl } title= { a.title }/>
                                                                })
                                                            }
                    <div className="borde"></div>
                    <div className="total">
                        <p>TOTAL <b>${totalCarro}</b></p>
                    </div>
                </div>
                <div className="col-sm-6 formulario">
                    <Form/>
                </div>
                </>
                : 
                "Comprar"
            }
        </div>
    )
}

export default DetalleForm
