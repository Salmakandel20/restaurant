import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import "./Baked.css"
export default function Baked() {
  return (
    <div className='Backed'>
            <Container >
            <Row>
                <Col md="8">
                    <h4>Baked fresh daily by bakers with passion.</h4>
                </Col>
                <Col md="4">
                    <a href="#" className='btn  btn-danger Href '>Learn More</a>
                </Col>
            </Row>
        </Container>
    </div>

  )
}
