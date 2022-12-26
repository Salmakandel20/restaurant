import React from 'react'
import data from "../../../data.js"
import {Card,Col,Row} from "react-bootstrap"
export default function Food() {
  return (
    <Row>
        {
        data.map(food=>{
            return (
                <Col sm="12" md="4" lg="4" className="my-1 justify=content-between">

                <Card style={{ height:"26rem" ,border:'none', textAlign:"center",overflow:"hidden"}}>
                    <Card.Img variant="top" src={food.img} style={{ width:"250px",height:'150px',margin:"auto" }}/>
                    <Card.Body >
                    <Card.Title className='mb-1 '>{food.title}</Card.Title>
                    <p className='blogP'>
                    {food.time}
                    </p>
                    <span>
                    $ {food.price} 
                    </span>
                    <del>${food.prevprice}</del>
                    </Card.Body>
                    <button><a href="#">Order Now</a></button>
                </Card>
                </Col>

            )
            })

        }
    </Row>
      
  )
}
