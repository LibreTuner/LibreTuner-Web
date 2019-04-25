import React from 'react';
import Logo from './Logo';

import { Link } from "react-router-dom"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import './Navigation.css'

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                        <NavDropdown title="Tune" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/tune/edit">Edit Tune</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search Tune</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}

export default Navigation;