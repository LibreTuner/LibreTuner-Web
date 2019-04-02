import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar nav flex-column" role="tablist">
                <Link className="nav-link" to="/">Home</Link>
                <span>Tune</span>
                <Link className="nav-link" to="/tune/create">Create</Link>
                <Link className="nav-link" to="/tune/edit">Edit</Link>
                <Link className="nav-link" to="/tune/flash">Flash</Link>
                <span>Rom</span>
                <Link className="nav-link" to="/rom/download">Download</Link>
            </div>
        )
    }
}

export default Sidebar;