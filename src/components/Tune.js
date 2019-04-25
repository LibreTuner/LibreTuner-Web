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
                <Sidebar md={2}>{this.props.name} Test1</Sidebar>
                <Col md={9}>Test</Col>
            </Row>
            </Container>
        )
    }
}

export default Tune;