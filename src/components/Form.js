import React from 'react'

const Form = () => {
    return (
        <>
          <input type="text" placeholder="Nombre y Apellido" required/>  
          <input type="text" placeholder="Empresa" required/>  
          <input type="text" placeholder="E-mail" required/>  
          <input type="text" placeholder="Teléfono" required/>  
          <input className="porque" type="text" placeholder="¿Por qué medio desea ser contactado?" required/>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> Teléfono </label>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> E-mail </label>
          <input className="porque" type="text" placeholder="¿Como nos conoció?" required/>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> Newsletter </label>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> Google </label>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> Redes </label>
          <label htmlFor=""> <input type="checkbox" name="" id=""/> Recomendación </label>
          <div>
              <button>FINALIZAR</button>
          </div>
        </>
    )
}

export default Form
