import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faYoutube,faInstagram,faSpotify,faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"
export default function Footer() {
  return (
    <footer>
        <Container>
            <Row>
                <Col className='textAlgin:center HrefContainer'>
                <a href="#">Register</a>
                <a href="#">Forum</a>
                <a href="#">Affiliate</a>
                <a href="#">FAQ</a>
                </Col>
            </Row>
            <Row>
                <Col className='my-2 py-3' >
                <a href='#' className='Social'><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                <a href='#' className='Social'><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> /></a>
                <a href='#' className='Social'><FontAwesomeIcon icon={faYoutube} /></a>
                <a href='#' className='Social'><FontAwesomeIcon icon={faSpotify} /></a>
                <a href='#'className='Social'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='#' className='Social'><FontAwesomeIcon icon={faInstagram} /></a>
                </Col>
            </Row>
            <Row>
                <Col>
                <span>
                © 2021. Foodera. All rights reserved.
            </span>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
