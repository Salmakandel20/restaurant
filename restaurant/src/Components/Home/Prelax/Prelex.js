import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "./Prelex.css"
export default function Prelex() {
  return (
    <div className='Prelex'>
        <Container>
        <div className='PrelexContent row '  lg="12" >
            <h2>When a man's stomach is full it makes no<br></br>
              difference whether he is rich or poor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam et purus a odio<br></br> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <a href="https://www.youtube.com/watch?v=bZx8rPd-PKQ">
                <i className="fa fa-play"></i>
                Whatch Our Story</a>
        </div>
        </Container>
       
    </div>
  )
}
