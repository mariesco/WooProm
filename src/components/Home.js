import React from 'react'
import Slide1 from './Slide1'
import Novedades from './Novedades'
import Destacados from './Destacados'
import Envios from './Envios'
import ListadoProductos from './ListadoProductos'
import Compromiso from './Compromiso'
import Confianza from './Confianza'
import Marcas from './Marcas'
import Trabajos from './Trabajos'

const titulopd = <h1>PRODUCTOS DESTACADOS</h1>

const Home = ({listado}) => {
    return (
        <>            
            <Slide1 />
            <Novedades listado={listado} />
            <Destacados/>
            <Envios/>
            <ListadoProductos listado={listado} titulo={titulopd} />
            <Compromiso/>
            <Confianza/>
            <Trabajos/>
            <Marcas/>         
        </>
    )
}

export default Home
