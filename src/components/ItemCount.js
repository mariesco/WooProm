import React, { useState } from 'react'
import '../assets/css/itemcount.css'

function ItemCount({ stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState(initial) 

    //const [carrito, setCarrito] = useState(0)

    // Use effect me sirve para generar efecto secundario en pantalla, lleva dos parametros A y B
    // A es una funcion y b es un array
    // A es el efecto secundario, lo que debe hacer el componente, se ejecutan cada vez q el componente renderiza
    /*
    useEffect(() => {
        if(cantidad === stock) {
            console.log('stock maximo')
        }
        
        const pedido = fetch('https://jsonplaceholder.typicode.com/users')

        pedido
        .then((respuesta)=>{
            console.log(respuesta)
            if(respuesta.status === 200){
                console.log('Estuvo todo bien')
                const prometo_transformacion = respuesta.json()
                return prometo_transformacion
            } else {
                console.log('Errorrrr')
                throw new Error("hubo un error". respuesta.status)
            }
        })
        .then((respuesta)=>{
            console.log(respuesta)
        })
        .catch(()=>{
            console.log('Errorrrr')
        })
        
    },[cantidad])
    */
    
    const aumentarCantidad = () => {
        console.log("hola")
        if(stock > 0 && cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }
    
    const reducirCantidad = () => {
        if(cantidad > initial) {
            setCantidad(cantidad-1)
        }
    }

    const cantidadAdd = () => {
        setCantidad(cantidad)
        onAdd(cantidad)
    }

    return (
        <>

            <div id="itemcount" className="row">
                <div className="col-sm-3 contador">
                    <button className="btncontador" onClick = { reducirCantidad }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>
                    </button>  
                    <span className="spancontador" >{stock > 0 ? cantidad : 0}</span>
                    <button className="btncontador" onClick = { aumentarCantidad }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
                        </svg>
                    </button>
                </div>
                {
                    stock > 0 ? 
                        <div className="col-sm-9 agregar">
                            <button className="add"  onClick = { cantidadAdd }> Agregar al carrito</button>
                        </div>  
                    :
                        <button className="btn text-danger add">SIN STOCK</button>
                }
            </div>
        </>
    )
}

export default ItemCount
