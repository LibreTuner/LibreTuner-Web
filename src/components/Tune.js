import React, { Component } from 'react';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

class Tune extends Component {
    render() {
        return (
            <Container>
                <Col>this.props.name</Col>
            </Container>
        )
    }
}

export default Tune;