import Card from 'react-bootstrap/Card';
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Ethan from "./Images/ethan.jpeg";
import Billy from "./Images/billy.jpeg";
import Suzy from "./Images/suzy.jpeg";

const reviews = [
    {
        id: 1,
        icon: Ethan,
        name: "Ethan M.",
        location: "Chicago, IL",
        review: "My favorite neighborhood restaurant. Yannis and Luigi feel like family.",
    },
    {
        id: 2,
        icon: Suzy,
        name: "Suzy Q.",
        location: "Grand Rapids, MI",
        review: "Was in town for work and this meal made my whole trip worth it.",
    },
    {
        id: 3,
        icon: Billy,
        name: "Billy S.",
        location: "Chicago, IL",
        review: "They have all my favorite liquor, best spot in town.",
    },
]

function TestCards() {
    return (
      <>
      <article style={{marginTop:"5rem", marginBottom:"5rem"}} id="review-section">
    <Container className='shadow test-container'>
        <Row xs={1} md={1} lg={3}>
        {reviews.map(({ id, icon, name, location, review }) => (
            <Col key={id}>
                <Card className='custom-class'
                      style={{width:'20rem',
                      marginLeft:'auto',
                      marginRight:'auto',
                      marginTop:'1.5rem',
                      marginBottom:'1.5rem'}}>
                    <Card.Body>
                    <Card.Img className='img-fluid rounded-pill' src={icon} variant='top'
                        style={{
                            height:"8rem",
                            width:"8rem",
                            marginLeft:"10rem",
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
        </Container>
        </article>
      </>
    );
  }

  export default TestCards;