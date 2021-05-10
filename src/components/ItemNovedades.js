import React from 'react'
import {NavLink} from 'react-router-dom'

const ItemNovedades = ({id, pictureUrl}) => {
    return (
        <div>
            <img className="img-fluid" src={pictureUrl} alt=""/>
            <NavLink to= {`/item/`+id} >Ver Producto</NavLink>
        </div>
    )
}

export default ItemNovedades
