import React, {useState, useEffect, useContext} from 'react'
import {CartContext} from '../context/cartContext'

const Form = () => {
    
    const [nombre, setNombre ] = useState('')
    const [empresa, setEmpresa] = useState('')



    const { totalCarro, carro, setCarro, carroFinal, setCarroFinal, setUnidadesCarro, setTotalCarro, notify } = useContext(CartContext)
    const finalizarCompra = e => {
        e.preventDefault()
        if(nombre === '') {notify('Debes insertar tu nombre y apellido'); return}
        if(empresa === '') {notify('Debes insertar el nombre de tu empresa'); return}
        console.log("enviado")
    }

    return (
        <form onSubmit={ finalizarCompra }>
           <input onChange={ e => setNombre(e.target.value)} type="text" placeholder="Nombre y Apellido" value={ nombre }/>
 
          <input onChange={ e => setEmpresa(e.target.value)} type="text" placeholder="Empresa" value={ empresa }/>  
          <input type="text" placeholder="E-mail"/>  
          <input type="text" placeholder="Teléfono"/>  
          <p className="porque" >¿Por qué medio desea ser contactado?</p>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> Teléfono </label>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> E-mail </label>
          <p className="porque" >¿Como nos conoció?</p>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> Newsletter </label>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> Google </label>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> Redes </label>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> Recomendación </label>
          <textarea name="" id="" cols="30" rows="10" placeholder="¿Quiere dejarnos algun comentario?"></textarea>
          <div>
              <button>FINALIZAR</button>
          </div>
        </form>
    )
}

export default Form
