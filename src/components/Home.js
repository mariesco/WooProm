import React from 'react'
import Slide1 from './Slide1'
import Novedades from './Novedades'
import Destacados from './Destacados'
import Envios from './Envios'
import ProductosDestacados from './ProductosDestacados'
import Compromiso from './Compromiso'
import Confianza from './Confianza'
import Marcas from './Marcas'
import Trabajos from './Trabajos'

const titulopd = <h1>PRODUCTOS DESTACADOS</h1>

const Home = () => {
    return (
        <>            
            <Slide1 />
            <Novedades/>
            <Destacados/>
            <Envios/>
            <ProductosDestacados titulo={titulopd} />
            <Compromiso/>
            <Confianza/>
            <Trabajos/>
            <Marcas/>         
        </>
    )
}

export default Home
