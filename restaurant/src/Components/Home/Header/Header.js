import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import "./Header.css"
export default function Header() {
  return (
    <div className='header '>
      <Container>
      <Row  className='head_row' >
            <Col  lg="4">
                <h2>Good food choices are good investments.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                <button>Order Now</button>
                <button >Learn More</button>
            </Col >
            
        </Row>
      </Container>
        
    </div>
  )
}
