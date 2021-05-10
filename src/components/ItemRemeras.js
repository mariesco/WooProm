import React from 'react'
import Marcas from './Marcas'
import Slide1 from './Slide1'
import ListadoProductos from './ListadoProductos'

const remeras = <h1>Remeras</h1>

const ItemRemeras = ({listado}) => {
    return (
        <>
            <Slide1/>
            <ListadoProductos listado={listado} titulo={remeras} />
            <Marcas/>
        </>
    )
}

export default ItemRemeras
