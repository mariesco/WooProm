import React, { useContext } from "react";
import {CartContext} from '../context/cartContext'
import { NavLink } from 'react-router-dom'
import carrito from '../assets/img/SVG/cartico.svg'

function CartWidget() {

  const { unidadesCarro } = useContext(CartContext)

  return (
    <>
        <div className={`${unidadesCarro > 0 ? "mostrar" : "ocultar"}`}>
            <NavLink to="/cart">              
              <img src={carrito} alt=""/>
            </NavLink>
          <span className="badge badge-primary">{ unidadesCarro }</span>
        </div>            
    </>
  );
}

export default CartWidget;
