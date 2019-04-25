import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'


import './Sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <Nav className="sidebar flex-column d-none d-md-block" bg="light" role="tablist">
                <Col md={2} className="sidebar-bg"></Col>
                <Link className="nav-link" to="/">Home</Link>
                <span>Tune</span>
                <Link className="nav-link" to="/tune/create">Create</Link>
                <Link className="nav-link" to="/tune/edit">Edit</Link>
                <Link className="nav-link" to="/tune/flash">Flash</Link>
                <span>Rom</span>
                <Link className="nav-link" to="/rom/download">Download</Link>
            </Nav>
        )
    }
}

export default Sidebar;