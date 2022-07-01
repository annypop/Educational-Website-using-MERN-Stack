import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand ms-auto" to="/">
                <img src={logo} alt="logo"/>
            </NavLink>
                <NavLink className="navbar-brand me-auto" to="/">National Institute of Technology Karnataka, Surathkal</NavLink>
            </nav>
        </>
    )
}

export default Navbar