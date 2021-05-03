import React, {useState} from 'react'
import SlideItemMochilas from './SlideItemMochilas'

const ItemMochilas = () => {

    const [cantidad, setCantidad] = useState(0)
    
    
    const aumentarCantidad = () => {
        setCantidad(cantidad + 1)
    }

    const restarCantidad = () => {
        setCantidad(cantidad - 1)
    }

    return (
        <div id="itemmochilas" className="row">
            <div className="col-6">
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
                <p className="d-inline precio">AR$1.970,78 + iva</p>
                <p>Cantidad Mínima: 1 unidad.</p>
                <div className="row">
                    <div className="col-4">
                        <button onClick={restarCantidad}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                            </svg>
                        </button>
                        <span>{cantidad}</span>
                        <button onClick={aumentarCantidad}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="col-8">
                        <button> Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemMochilas
