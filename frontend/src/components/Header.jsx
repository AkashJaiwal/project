import React from 'react'
import logo_image from '../assets/jehangir_logo.jpg'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <img src={logo_image} alt="logo"/>
                </li>
            </ul>
        </nav>
    )
}

export default Header