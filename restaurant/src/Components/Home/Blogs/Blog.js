import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Food from '../../Utility/Foods/Food'
import  "./Blog.css"
export default function Blog() {
  return (
    <div className='Blog'>
        <Container>
            <Row>
                <Col>
                  <h3>Explore Our Foods</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                </Col>
            </Row>
            <Food/>
        </Container>

    </div>
  )
}
