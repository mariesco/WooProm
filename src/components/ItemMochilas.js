import React, {useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import '../assets/css/destacados.css'
import rem from '../assets/img/productos/remera_quina_perfil.jpg'
import camp from '../assets/img/productos/chale_polar_1.jpg'
import tazaenlozada from '../assets/img/productos/jarro_enlozado.jpg'
import ItemMochilaDetalle from './ItemMochilaDetalle'

const ItemMochilas = ({listado}) => {
console.log(listado)
    const {id} = useParams()
    console.log(id)
    return (
        <div id="itemmochilas" className="row">
                <div className="col-12 titulo">
                    <p>Inicio / Bolsos y Mochilas / Mochilas</p>
                </div>
                {
                    listado.filter(a => a.id == id).map(a => {
                        return <ItemMochilaDetalle key={a.id} id={a.id} title={a.title} description={a.description} price={a.price} stock={a.stock} pictureUrl={a.pictureUrl} pictureUrl1={a.pictureUrl1} pictureUrl2={a.pictureUrl2} />
                    })
                }
                <div className="col-12 bbox"></div>
        </div>
    )
}

export default ItemMochilas
