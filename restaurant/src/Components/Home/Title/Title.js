import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Subtitle from '../../Utility/SubTitle/Subtitle'
import "../../Utility/SubTitle/Subtitle.css"
export default function Title() {
  return (
    <div  className="DivContent">
        <Row className=' d-flex justify-content-between' >
          <Subtitle number="1234+" text="Saving"/>
          <Subtitle number="8543+" text="Photos"/>
          <Subtitle number="6734+" text="RocKts"/>
          <Subtitle number="1894+" text="Globes"/>

        </Row>
        </div>
  )
}
