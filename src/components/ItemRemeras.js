import React from 'react'
import ItemMochilas from './ItemMochilas'
import Marcas from './Marcas'
import ProductosDestacados from './ProductosDestacados'
import Slide1 from './Slide1'

const remeras = <h1>Remeras</h1>

const ItemRemeras = () => {
    return (
        <>
            <Slide1/>
            <ProductosDestacados titulo={remeras} />
            <Marcas/>
            <ItemMochilas/>
        </>
    )
}

export default ItemRemeras
