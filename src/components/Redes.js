import React from 'react'
import { NavLink } from 'react-router-dom';
import facebook from  "../assets/img/SVG/faceico.svg";
import instagram from  "../assets/img/SVG/instagramico.svg";
import twitter from  "../assets/img/SVG/twtico.svg";
import linkedin from  "../assets/img/SVG/linkedinico.svg";

const redes = () => {
    return (
        <div>          
            <li className="nav-item redes redes1" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink to="/category/2" className="nav-link">
                <img src= {instagram} alt=""/>
              </NavLink>
            </li>
            <li className="nav-item redes" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink to="/category/2" className="nav-link">
                <img src= {facebook} alt=""/>
              </NavLink>
            </li>
            <li className="nav-item redes" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink to="/category/2" className="nav-link">
                <img src= {twitter} alt=""/>
              </NavLink>
            </li>
            <li className="nav-item redes" data-toggle="collapse" data-target=".navbar-collapse.show">
              <NavLink to="/category/2" className="nav-link">
                <img src= {linkedin} alt=""/>
              </NavLink>
            </li>            
        </div>
    )
}

export default redes
