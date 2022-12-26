import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Form.css"
export default function Form() {
  return (
    <div className='Form'>
        <Container>
            <Row>
                <Col md="12">
                    <h1>Hurry up! Subscribe our newsletter
                      and get 25% Off</h1>
               <p>Limited time offer for this month. No credit card required.</p>
                </Col>
                <form>
                <Row>
                <Col md="8"><input type="email"placeholder='Email Address here'></input> </Col>
                <Col md="4"><button className='btn btn-danger '>Subscribe</button></Col>
                </Row>
                </form>
               
            </Row>
        </Container>

    </div>
  )
}
