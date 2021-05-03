import React from 'react'
import SlideItemMochilas from './SlideItemMochilas'
import '../assets/css/destacados.css'
import Contador from './Contador'

const ItemMochilas = () => {
    return (
        <div id="itemmochilas" className="row">
            
            <div className="col-12 titulo">
                <p>Inicio / Bolsos y Mochilas / Mochilas</p>
            </div>
            <div className="col-6 slide-container">
                <SlideItemMochilas/>
            </div>
            <div className="col-6 texto">
                <h1>C531/ Mochila "Fort"</h1>
                <p>Mochila porta Notebook. Presenta dos bolsillos en el frente
                con cierre oculto y en la parte superior central una chapa
                de 5cm x 1cm para poder grabar una inscripción. Luego
                dos compartimientos, el primero con un cierre doble, el
                segundo y principal, también con cierre doble que contiene
                sobre el sector de la espalda el bolsillo porta notebook con
                sujetador con velcro con capacidad para introducir una
                notebook de hasta 17&Prime.</p>
                <p className="d-inline precio"><b>AR$1.970,78</b>+ iva</p>
                <p>Cantidad Mínima: 1 unidad.</p>
                <div className="row">
                    <div className="col-4">
                        <Contador/>
                    </div>
                    <div className="col-8">
                        <button> Agregar al carrito</button>
                    </div>
                </div>
                <div className="botones">                    
                    <p>Colores disponibles:</p>
                    <button className="grisoscuro"></button>
                    <button className="rojo"></button>
                    <button className="celeste"></button>
                    <button className="grisclaro"></button>
                    <button className="verde"></button>
                </div>
            </div>
            <div className="col-12 bbox"></div>
        </div>
    )
}

export default ItemMochilas
