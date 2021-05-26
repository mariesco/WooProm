import React from 'react'
import Marcas from './Marcas'
import slide from '../assets/img/indumentaria.png'
import ListadoProductos from './ListadoProductos'

const remeras = <h1>Remeras</h1>

const ItemRemeras = ({listado}) => {
    return (
        <>
            <div id="img-remeras">
                <img src={slide} alt="" />
            </div>
            <ListadoProductos listado={listado} titulo={remeras} />
            <Marcas/>
        </>
    )
}

export default ItemRemeras
