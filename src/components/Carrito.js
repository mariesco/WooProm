import React, {useContext} from 'react'
import '../assets/css/carrito.css'
import ItemCarrito from './ItemCarrito'
import { CartContext } from '../context/cartContext'
import { NavLink } from 'react-router-dom'

const Carrito = ({listado}) => {
    
    const { totalCarro, carro, removeItem, unidadesCarro, clear } = useContext(CartContext)
    console.log(carro)
    return (
        <div id="carrito" className="container-fluid">
            <div className="row">
                {
                    totalCarro !== 0 ?
                    <>
                    <div className="col-12 titulo">
                        <p>TU CARRITO</p>
                    </div>
                    {
                        carro.map (a => {
                            return  <ItemCarrito  key={a.id} id={a.id} title={a.title} total={a.total} price={a.precio} pictureUrl={a.pictureUrl} cantidad={a.quantity} />
                        })
                    }
                    <div className="col-12 total">
                        <p>TOTAL ${totalCarro}</p>
                    </div>
                    <div className="col-sm-6 order-0"></div>
                    <div className="col-sm-3 presupuesto">
                        <NavLink className="volver" to="/">VOLVER AL CATÁLOGO</NavLink>
                    </div>
                    <div className="col-sm-3 presupuesto">
                        <NavLink to="/checkout">SOLICITAR PRESUPUESTO</NavLink>
                    </div>
                    </>
                    :
                    "Tu carrito está vacío"
                }
            </div>
        </div>
    )
}

export default Carrito
