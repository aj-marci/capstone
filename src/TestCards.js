import Card from 'react-bootstrap/Card';
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pic from "./Images/review-pic.png"

const reviews = [
    {
        id:"user1",
        name: "Audry O.",
        location: "Chicago, IL",
        review: "My favorite neighborhood restaurant. Not ashamed to be a regular.",
    },
    {
        id:"user1",
        name: "AJ M.",
        location: "Grand Rapids, MI",
        review: "Was in town for work and this meal made my whole trip worth it.",
    },
    {
        id:"user1",
        name: "Zach G.",
        location: "Chicago, IL",
        review: "They have all my favorite liquor, best spot in town.",
    },
]

function TestCards() {
    return (
      <>
    <Card className='test-title'
          variant='light' border='light' bg='light'
          style={{width:'70%'}}>
        <Row>
            <Col sm={12} lg={12} align='center'>
              <Card.Title variant='dark'
              style={{
              marginTop:".5rem",
              fontSize:"2.25rem",
              fontFamily:"Markazi"}}>
              Testimonials</Card.Title>
            </Col>
        </Row>
    </Card>
        <Row xs={1} md={2} lg={3}>
        {reviews.map(({ id, name, location, review }) => (
            <Col key={id}>
                <Card className='custom-class'
                      style={{width:'20rem',
                      marginLeft:'auto',
                      marginRight:'auto',
                      marginTop:'1rem',
                      marginBottom:'1rem'}}>
                    <Card.Body>
                    <Card.Img className='img-fluid rounded-pill' src={Pic} variant='top'
                        style={{
                            height:"8rem",
                            width:"8rem",
                            marginLeft:"8rem",
                            marginBottom:"-3rem",
                            marginTop:"-2rem"}}/>
                        <Card.Title
                        style={{
                            fontFamily:"Markazi",
                            fontSize:"1.5rem",
                            marginBottom:'.75rem'}}>{name}</Card.Title>
                        <Card.Subtitle
                        style={{
                            fontFamily:"Markazi",
                            color:"#F4CE14",
                            marginBottom:'.5rem'}}>{location}</Card.Subtitle>
                        <Card.Text
                        style={{
                            fontFamily:"Markazi"}}>"{review}"</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
      </>
    );
  }

  export default TestCards;