import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Sidebar from './Sidebar'

class Tune extends Component {
    render() {
        return (
            <Container fluid>
            <Row>
                <Col md={2} className="px-0">
                    <Sidebar>{this.props.name} Test1</Sidebar>
                </Col>
                <Col md={8}>Test</Col>
            </Row>
            </Container>
        )
    }
}

export default Tune;