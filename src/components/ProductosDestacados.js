import React from 'react'
import ColumnasPD from './ColumnasPD'
import '../assets/css/pd.css'

const ProductosDestacados = ({titulo}) => {


    return (
        <div id="productos-destacados" className="row">
            <div className="col-12">
                <div>
                    {titulo}
                </div>
            </div>
            <ColumnasPD/>
            <ColumnasPD/>
            <ColumnasPD/>
        </div>
    )
}

export default ProductosDestacados
