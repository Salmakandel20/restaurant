import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import FaqContent from '../../Utility/FaqContent/FaqContent'
import "./Faq.css"

export default function Faq() {
  return (
   
   <Container >
     <Row>
        <Col className='text-center Content'>
           <h3>Frequently Asked Questions
             </h3>
        </Col>
     </Row>
        <Row>
           
                <FaqContent Que="Is Foodera Bread really baked fresh each day?"/> 
                <FaqContent Que="Do you bake breads containing animal fats or products?"/> 
                <FaqContent Que="Can I order your products online?"/> 
                <FaqContent Que="When are you opening a shop near me?"/> 
        </Row>
    
   </Container>
  )
}
