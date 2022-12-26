import React from 'react'
import {Col} from "react-bootstrap"
import "./FaqContent.css"
export default function FaqContent({Que}) {
  return (
    <Col lg="6" sm="6" >
        <h4> <span className='ColSpan'>~</span>{Que}</h4>
        <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language."</p>
    </Col>
  )
}
