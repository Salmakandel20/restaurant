import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import "./Pride.css"
import logo from "../../../images/b11.png"
export default function Pride() {
  return (
    <div className='pride '>
      <Container>
      <Row  className='' >
        <Col lg="6">
            <img src={logo} alt="Pride" className='imgPride'/>
        </Col>
            <Col  lg="6">
                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button >Learn More</button>
            </Col >
            
        </Row>
      </Container>
        
    </div>
  )
}
