import React, {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/cartContext'
import mochila from '../assets/img/productos/C531_perfil-247x296.jpg'

const ItemCarrito = ({id, title, stock, description, price, pictureUrl, total, cantidad}) => {
    console.log(price)
    const { addItem, removeItem, isInCart } = useContext(CartContext)
    
    const [estado, setEstado] = useState(0)

    const onAdd = (cantidad) => {
        setEstado(cantidad)
        addItem(id, title, cantidad, price, pictureUrl, total)
    }
    
    return (
        <div className="col-12 lista">
            <div className="row">
            <div className="col-sm-5">
                <div className="row">
                    <div className="col-6 col-sm-2">
                        <img className="img-fluid" src={pictureUrl} alt=""/>
                    </div>
                    <div className="col-6 col-sm-10">
                        <p className="modelo">{title}</p>
                        <p className="detalle">Precio Unitario: ${price} </p>
                        <div className="ic">
                            <div className="count2">
                                <p>x {cantidad} </p>
                            </div>
                            <div className="precio2">
                                <p>${total}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 col-sm-5 count">
                <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
            <div className="col-sm-1 count2">
                <p>x {cantidad} </p>
            </div>
            <div className="col-1 col-sm-1 precio">
                <p>${total}</p>
            </div>
            </div>
        </div>
    )
}

export default ItemCarrito
