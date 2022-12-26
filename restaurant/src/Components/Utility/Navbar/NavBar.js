import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../images/logo.png"
import "./NavBar.css"
export default function NavBar() {
  return (

<Navbar  expand="lg" >
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="foodera" className="img_Navbar"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="#link">Explore Foods</Nav.Link>
                <Nav.Link href="#link">Reviews</Nav.Link>
                <Nav.Link href="#link">FAQ</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#link"  className='link_Navbar'>
                   010123456
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    
      );
    }
