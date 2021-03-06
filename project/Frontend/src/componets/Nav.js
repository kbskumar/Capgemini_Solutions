import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import Search from "./Search";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt={"missing"}/>
                </Link>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item active">
                            <Search></Search>
                        </li>
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/register" className="nav-link">SignUp</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
