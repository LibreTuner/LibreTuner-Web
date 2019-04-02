import React from 'react';
import Logo from './Logo';

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import './Navigation.css'

function Navigation() {
    return (
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
        <a className = "navbar-brand" href="#">
            <Logo/>
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <il className="nav-item">
                <Link to="/" className="nav-link">Dashboard</Link>
            </il>
        </ul>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        </nav>
    )
}

export default Navigation;