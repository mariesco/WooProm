import React from 'react'
import {NavLink} from 'react-router-dom'
import '../assets/css/prefooter.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="text-center">
                    Diseño y Desarrollo <NavLink to="/">Bief</NavLink>
                </p>
            </div>
        </footer>
    )
}

export default Footer
