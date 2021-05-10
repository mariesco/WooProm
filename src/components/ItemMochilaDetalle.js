import React, {useContext, useState} from 'react'
import SlideItemMochilas from './SlideItemMochilas'
import ItemCount from './ItemCount'
import { CartContext } from '../context/cartContext'

const ItemMochilaDetalle = ({id, title, stock, description, price, pictureUrl, pictureUrl1, pictureUrl2}) => {
    const { addItem, removeItem, isInCart } = useContext(CartContext)
    
    const [estado, setEstado] = useState(0)

    const onAdd = (cantidad) => {
        setEstado(cantidad)
        addItem(id, title, cantidad, price, pictureUrl)
    }
    return (
        <>
            <div className="col-sm-6 slide-container">
                    <SlideItemMochilas imagenes={[pictureUrl2, pictureUrl, pictureUrl1]} />
                </div>
                <div className="col-sm-6 texto">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p className="d-inline precio"><b>${price}</b>+ iva</p>
                    <p>Cantidad Mínima: 1 unidad.</p>
                            <ItemCount stock={10} initial={1} onAdd={onAdd} />
                    <div className="botones">                    
                        <p>Colores disponibles:</p>
                        <button className="grisoscuro"></button>
                        <button className="rojo"></button>
                        <button className="celeste"></button>
                        <button className="grisclaro"></button>
                        <button className="verde"></button>
                    </div>
                </div>
        </>
    )
}

export default ItemMochilaDetalle
