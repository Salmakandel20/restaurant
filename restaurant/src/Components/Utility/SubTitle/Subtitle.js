import React from 'react'
import { Col } from 'react-bootstrap'
import "./Subtitle.css"
export default function Subtitle({number,text}) {
  return (
    <Col lg="3" sm="12" >
        <div className='content-div'>
        <h2>{number}</h2>
    <span>{text}</span>
        </div>
    
</Col>
  )
}
