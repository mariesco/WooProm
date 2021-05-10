import React from 'react'
import Item from './Item'
import '../assets/css/pd.css'

const ListadoProductos = ({titulo, listado}) => {

    return (
        <div id="productos-destacados" className="row">
            <div className="col-12">
                <div>
                    {titulo}
                </div>
            </div>
            
            {
                    
                    listado.map(a => {
                        return <div className="col-sm-3">
                            <Item key={a.id} id={a.id} title={a.title} description={a.description} price={a.price} stock={a.stock} pictureUrl={a.pictureUrl} pictureUrl1={a.pictureUrl1} pictureUrl2={a.pictureUrl2} />
                            </div> 
                    })
                    
                }
        </div>
    )
}

export default ListadoProductos
