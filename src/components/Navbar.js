import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';
import Redes from './Redes'


function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to="/" className="nav-link">
                  NOSOTROS
                </NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to="/category/1" className="nav-link">
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to="/category/2" className="nav-link">
                  NUESTROS TRABAJOS
                </NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to="/category/2" className="nav-link">
                  DESARROLLOS ESPECIALES
                </NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to="/category/2" className="nav-link">
                  CATÁLOGOS
                </NavLink>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <NavLink to="/category/2" className="nav-link contacto">
                  CONTACTO
                </NavLink>
              </li> 
              <Redes/>
            </ul>
          </div>
        </div>
      </nav>
      <CartWidget/>
    </>
  );
}

export default Navbar;
