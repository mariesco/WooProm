import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/SVG/logoico.svg';
import carrito from '../assets/img/SVG/cartico.svg'
import CartWidget from './CartWidget'

const Header2 = () => {
    return (
        <div id="header2" className="row">
            <div className="col-5 order-0 order-sm-0 col-sm-3">
                <NavLink to="/">
                    <img src={logo} alt=""/>
                </NavLink>
            </div>
            <div className="col-6 order-2 order-sm-1 col-sm-2 drop">
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CATEGORÍAS
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink className="dropdown-item" to="#">Cat1</NavLink>
                        <NavLink className="dropdown-item" to="#">Cat2</NavLink>
                        <NavLink className="dropdown-item" to="#">Cat3</NavLink>
                    </div>
                </div>
            </div>
            {window.innerWidth > 576 
            ?
            <>
            <div className="col-7 order-1 order-sm-2 col-sm-5">
                <form className="col-12 col-lg-auto mb-lg-0">
                    <input type="search" className="form-control" placeholder="Ej.: Remera, Gorra, Lapicera..."/>
                    <button className="buscar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                        Buscar
                    </button>
                </form>
            </div>
            <div className="col-6 order-3 order-sm-3 col-sm-2 carro">
                <CartWidget/>
            </div>
            </>
            :
            <div className="col-6 order-3 order-sm-3 col-sm-2 carro">
                <NavLink to="/" className="buscar2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </NavLink>
                <CartWidget/>
            </div>
            }
        </div>
    )
}

export default Header2
