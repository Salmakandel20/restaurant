import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import "./Ingredients.css"
import logo from "../../../images/b3.png"
export default function Ingredients() {
  return (
    <div className='Ingredients '>
      <Container>
      <Row  className='' >
      <Col  lg="6">
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                <ul>
                    <li>
                        <i class="fa fa-check"></i>
                        Etiam sed dolor ac diam volutpat.</li>
                    <li>
                        <i class="fa fa-check"></i>
                        Erat volutpat aliquet imperdiet</li>
                    <li>
                        <i class="fa fa-check"></i>
                        purus a odio finibus bibendum.</li>
                </ul>
                <button >Learn More</button>
            </Col >
        <Col lg="6">
            <img src={logo} alt="Pride" className='imgIngredients'/>
        </Col>
           
            
        </Row>
      </Container>
        
    </div>
  )
}
