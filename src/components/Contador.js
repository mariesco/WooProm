import React, {useState} from 'react'

const Contador = () => {

    const [cantidad, setCantidad] = useState(0)
    
    
    const aumentarCantidad = () => {
        setCantidad(cantidad + 1)
    }

    const restarCantidad = () => {
        setCantidad(cantidad - 1)
    }

    return (
        <>
        <button className="btncontador" onClick={restarCantidad}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
            </svg>
        </button>
        <span className="spancontador">{cantidad}</span>
        <button className="btncontador" onClick={aumentarCantidad}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
            </svg>
        </button>
        </>
    )
}

export default Contador