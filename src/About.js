import Card from 'react-bootstrap/Card';
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import owners from "./Images/owners.jpg";
import "./App.css"

function About() {
    return (
      <>
        <article>
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
              About Us</Card.Title>
            </Col>
        </Row>
    </Card>
      <Card border="light" className='about-card'
        style={{width:"60%"}}>
          <Row>
            <Col sm={12} md={12} lg={6}>
            <Card.Subtitle style={{
              marginLeft:"1.15rem",
              marginTop:"3rem",
              fontSize:"1rem",
              width:"90%",
              fontFamily:"Karla"}}>
              Hello! We are Yannis and Luigi, first generation Greek American brothers,
              and owners of Little Lemon.
            </Card.Subtitle>
            <Card.Subtitle style={{
              marginLeft:"1.15rem",
              marginTop:"1rem",
              marginBottom:"3rem",
              fontSize:"1rem",
              width:"90%",
              fontFamily:"Karla"}}>
              Our menu reflects recipes passed down to us
              that date back to the 19th Century.
            </Card.Subtitle>
            </Col>
            <Col sm={12} md={12} lg={6}>
              <Card.Img src={owners}
              className='img-fluid rounded'
              style={{
              marginLeft:"-2rem",
              marginTop:"1rem",
              marginBottom:"-5rem"}}/>
            </Col>
            </Row>
        </Card>
        </article>
      </>
    );
  }

  export default About;