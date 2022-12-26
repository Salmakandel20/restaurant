import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Slider from '../../Home/Slider/Slider'
import "./SliderTitle.css"
export default function SliderTitle() {
  return (
    <div className='Slider'>
      <Container>
    <Row >
        <Col>
           <h2>
           Testimonials
           </h2>
        </Col>
    </Row>
      <Slider/>

           
    </Container>
    </div>
  )
}
